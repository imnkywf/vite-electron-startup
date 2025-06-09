import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <a
        onClick={() => {
          navigate('/login')  // ✅ 正确跳转方式
        }}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        Go to Login
      </a>
    </div>
  )
}
