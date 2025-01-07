import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
  },
  role: {
    type: String,
    enum: ['user', 'admin'], 
    default: 'user',
  },
  profileImage: {
    type: String, 
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Assuming you have a Post model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function(next) {
  this.updatedAt = Date.now();
  next();
});

const  User = mongoose.model('User', userSchema);

export default User;