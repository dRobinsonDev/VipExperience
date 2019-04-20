const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET = process.env.SECRET;

module.exports = {
  login,
  signup,
};

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
	let newUser = new User(req.body);
	try {
		await newUser.save();
		const token = createJWT(newUser);
		res.json({ token });
	} catch (err) {
		res.status(400).json(err);
	}
}

function createJWT(user) {
  return jwt.sign(
    {user}, 
    SECRET,
    {expiresIn: '24h'}
  );
}