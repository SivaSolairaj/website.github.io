import React, { component  } from 'react'

export default class Home extends component {
     render () {
        return (
            <div> 
             <form >
                <input type='text'id='username'name='username'placeholder='username'></input>
                <input type='email'id='email'name='email'placeholder='email'></input>
                <input type='password'id='password'name='password'placeholder='password'></input>
                <button>Login</button>
                <button>Signup</button>
             </form>
            </div>
        )
     }
}