import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor() {
        super();
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
  }

  componentWillReceiveProps({ parameterState }) {
    console.log(parameterState);
    let people = [...this.people];
    switch (parameterState) {
      case "name":
        people.sort(this.compareNames);
        break;
      case "age":
        people.sort(this.compareDates);
        break;
      default:
    }
    this.people = people;
  }

	compareDates(person1, person2) {
    // complete this date comparator which enables sort by age
    let date1 = new Date(person1.birth);
    let date2 = new Date(person2.birth);
    if (date1 > date2) {
      return 1;
    } else if (date1 < date2) {
      return -1;
    } else {
      return 1;
    }
	}

	compareNames(person1, person2) {
    // complete this string comparator with enables sort by name
    if (person1.name > person2.name) {
      return 1;
    } else if (person1.name < person2.name) {
      return -1;
    } else {
      return 0;
    }
	}

	render() {
    const displayTable = this.people.map(item => {
      return (
        <tr key={Math.random()}>
          <td>{item.name}</td>
          <td>{item.birth}</td>
        </tr>
      );
    });

    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>{displayTable}</tbody>
        </table>
      </div>
    );
  }
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;

