import React from 'react';
import Counter from './components/Counter'
import StudentList from './components/StudentList'

class Content extends React.Component {

  render() {
    console.log('Render Dijalanin')
    return (
      <div>
        <Counter />
        <hr/>
        <StudentList />
      </div>
    )
  }
}

export default Content;