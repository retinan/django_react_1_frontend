import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8001/api/');
      const posts = await res.json();
      console.log(posts);
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
        <div className='App'>
          <h1>Django + React</h1>
          {this.state.posts.map(item => (
              <div key={item.id}>
                  <h1>{item.title}</h1>
                  <span>{item.content}</span>
                  <hr/>
              </div>
          ))}
        </div>
    );
  }

}

export default App;
