import React from 'react';
import Axios from 'axios';
import UserCard from './Components/GitUserCard';
import './Components/App.css';
class App extends React.Component {

  constructor (){
    super()
    this.state = {
      name: '',
      email: '',
      login: '',
      avatar: '',
      followers: []


    }

  }

  componentDidMount (){
    Axios.get('https://api.github.com/users/RobStew87')
        .then (response => { 
          // console.log (response.data.name)

          this.setState ({
            name: response.data.name,
            email: response.data.email,
            login: response.data.login,
            avatar: response.data.avatar_url
          })

        })
     Axios.get('https://api.github.com/users/RobStew87/followers')
        .then (response => {  
          console.log(response)

        this.setState ({
          followers: response.data
        })  
      })
  }

  render() {
    return(

      <div className = 'App'>
        <h1>Robert Stewart GitUserCard</h1>
         {this.state.followers.map(follower => {
           return (

             <div className = 'followers'> 

              <img src = {follower.avatar_url} />
              <div className = 'followersinfo'>
                <p>{follower.name}</p>
                <p>USERNAME: {follower.login}</p>
                <p> Here is my github url so you know where to find me! </p>
                <p>{follower.html_url}</p>
              </div>

             </div>

           )
         }
          )}

          <UserCard 
          name = {this.state.name}
          email = {this.state.email}
          login = {this.state.login}
          avatar = {this.state.avatar}
          />
      </div>
    )
  }
}
export default App; 