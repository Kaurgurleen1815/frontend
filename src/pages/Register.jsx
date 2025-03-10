import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { motion } from 'framer-motion'
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

const Register = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await axios.post('https://backend-mqy5.onrender.com/api/users/register', {
        name,
        phone,
        email,
        password
      })
      
      const userRes = await axios.get('https://backend-mqy5.onrender.com/api/users/score', {
        headers: { 'x-auth-token': res.data.token }
      })
      
      login(res.data.token, userRes.data)
      navigate('/')
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || 'Registration failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    let formatted = numbers
    if (numbers.length > 3) {
      formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    }
    if (numbers.length > 6) {
      formatted = `${formatted.slice(0, 7)}-${formatted.slice(7)}`
    }
    return formatted.slice(0, 12)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-full max-w-md px-4"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-500">Join our community today</p>
          </div>

          <div className="space-y-4">
            {/* Full Name Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <AiOutlineUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </motion.div>

            {/* Phone Number Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <AiOutlinePhone className="absolute left-4 top-4 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <AiOutlineMail className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <AiOutlineLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-200 transition-all"
          >
            Register Now
          </motion.button>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="text-purple-600 hover:text-purple-700 font-semibold underline underline-offset-4"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Register