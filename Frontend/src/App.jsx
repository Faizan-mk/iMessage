
import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <div>
        <h1>
          MY APP
        </h1>


         <header>
        <Show when="signed-out">
          <SignInButton mode='model' />
          <SignUpButton mode='model' />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      </div>
    </>
  )
}

export default App
