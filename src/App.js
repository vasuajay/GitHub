
import React, {Component} from 'react'
import axios from 'axios'
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      userData: null
    }
  }

    fetchGitData = () => {
      axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then((res) => {
          this.setState({
            userData: res.data
          })
        }).catch((err) => {
          throw err
        })
    }
    render () {
      return (
        <div className={'header'}>
          <div >
                Enter Github User Name to fetch his data!
          </div>
          <div >
            <input onChange={(e) => this.setState({userName: e.target.value})} type={'text'} />
            <button className={'btn'} onClick={this.fetchGitData}>ClickMe!!</button>
          </div>
          {this.state.userData && !this.state.userData.name && (
            <div className={'alert'}>User name not present</div>
          )}
          {this.state.userData && this.state.userData.name && (
            <div className={'row'}>              
              <div >
                <p>UserName: {this.state.userData.login}</p>
                <p>Name: {this.state.userData.name}</p>
                <p>Followers: {this.state.userData.followers}</p>
                <p>Company: {this.state.userData.company}</p>
                <p>Address: {this.state.userData.location}</p>
                <img src={this.state.userData.avatar_url} alt='avatar' />
              </div>
              <div />
            </div>
          )}
        </div>
      )
    }
}
    
      