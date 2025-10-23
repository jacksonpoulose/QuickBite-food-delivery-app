const { hashPassword, comparePassword } = require('../../utils/auth');
const User = require('../../models/user');  

const login = async (req, res) => {   
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    req.session.user = { user: user };
    return res.status(200).json({ message: 'Login successful', user: user.email });
}

const register = async (req, res) => {
    const { name, email, password, address, role } = req.body;
    const hashedPassword = await hashPassword(password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({ name, email, password: hashedPassword, address, role });
    if (!user) {
        return res.status(400).json({ message: 'User not created' });
    }
    return res.status(200).json({ message: 'Registration successful', user: user.email });
}

const logout = (req, res) => {
    req.session.destroy();
    return res.status(200).json({ message: 'Logout successful' });
}       

module.exports = {
    login,
    register,
    logout
}