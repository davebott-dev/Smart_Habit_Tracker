import { useState } from 'react'
import './App.css'

function Root() {

  return (
    <div className = "container">
      <header className = "header">
        <h1>Smart Habit Tracker</h1>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>My Habits</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </aside>
        <div className="dashboard">
          <form className="new-habit-form">
            <input type="text" />
            <button>Add Habit</button>
          </form>
        </div>
        <div className="habit-list">
          <h2>My Habits</h2>
          <ul>
            <li>
              <span>Drink Water</span>
              <button>Complete</button>
            </li>
            <li>
              <span>Exercise</span>
              <button>Complete</button>
            </li>
            <li>
              <span>Meditate</span>
              <button>Complete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Root;

// make this the root and use outlet to render sidebar content
// fix css to make page visually appealing