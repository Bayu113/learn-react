import React, { Component } from 'react'

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      Students: [
        'Bayu',
        'Garox',
        'Paank',
      ],
      studentName: '',
      editStudentIndex: null,
    }
  }
  onInputChange = event => {
    this.setState({
      studentName: event.target.value
    })
  };
  addStudentList = () => {
    const StudentList = this.state.Students;
    StudentList.push(this.state.studentName)

    this.setState({
      students: StudentList

    })
  }
  minStudentList = (index) => {
    //  const deleteList = JSON.par(JSON.stringfy(this.state.Students)) => another style
    const deleteList = [...this.state.Students]
    deleteList.splice(index, 1);

    this.setState({
      Students: deleteList
    })
  }
  editIndex = index => {
    this.setState({ editStudentIndex: index })
  }
  editStudentName = (e, index) => {
    const newStudents = [...this.state.Students];
    newStudents[index] = e.target.value;

    this.setState({ Students: newStudents });
  }

  listenToEnterKey = (e) => {
    if (e.key === 'Enter') {
      this.editIndex(null);
    }
  }
  render() {

    return (
      <div>
        <h2>Student List {3 + 4}</h2>
        <ul>
          {this.state.Students.map((value, index) => {
            return (
              <li key={index}>
                {index === this.state.editStudentIndex ? (
                  <React.Fragment>
                    <input type="text"
                      value={this.state.Students[index]}
                      autoFocus
                      onChange={(e) => { this.editStudentName(e, index) }}
                      onKeyPress={this.listenToEnterKey} />
                    <button className="btn btn-secondary" onClick={() => { this.setState({ editStudentIndex: null }) }}>Selesai Edit</button>
                  </React.Fragment>
                ) : (
                    <span onClick={() => { this.editIndex(index) }}>{value}</span>
                  )}

                <button className="btn btn-secondary" onClick={() => { this.minStudentList(index) }} >hapus saya</button>
              </li>
            )
          })}

        </ul>
        <input type="text" value={this.state.studentName} onChange={this.onInputChange} />
        <button className="btn btn-primary" onClick={this.addStudentList} disabled={this.state.studentName === ''}>SUBMIT</button>
      </div>
    )
  }
}

export default StudentList;