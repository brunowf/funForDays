import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable, Column } from 'primereact/datatable';
import './index.css';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          P: 'G',
          name: 'Mateus Pasinato',
          age: 27,
          gol: 44,
          des: 4,
          arm: 3,
          fin: 5,
          vel: 12,
          tec: 12,
          pas: 11,
          val: 3.5,
        },
        {
          P: 'G',
          name: 'Nuno Macedo',
          age: 20,
          gol: 33,
          des: 5,
          arm: 4,
          fin: 3,
          vel: 17,
          tec: 17,
          pas: 12,
          val: 2.5,
        },
        {
          P: 'G',
          name: 'Pedro Trigueira',
          age: 20,
          gol: 32,
          des: 5,
          arm: 5,
          fin: 5,
          vel: 15,
          tec: 14,
          pas: 11,
          val: 1.5,
        },
        // {
        //   P: 'G',
        //   name: 'Pedro Trigueira',
        //   age: '',
        //   gol: '',
        //   des: '',
        //   arm: '',
        //   fin: '',
        //   vel: '',
        //   tec: '',
        //   pas: '',
        //   val: '',
        // },
      ]
    }
  }

  componentDidMount() {
    let auxPlayers = this.state.players.slice();
    for (let i = 0; i < auxPlayers.length; i++) {
      let aux = auxPlayers[i]
      switch (aux.P) {
        case 'G':
          aux.med = aux.gol;
          break;
        default:
          break;
      }
    }
    this.setState({
      players: auxPlayers,
    });
  }

  render() {
    const columns = [
      {
        field: "P",
        header: "P"
      },
      {
        field: "name",
        header: "name"
      },
      {
        field: "age",
        header: "age"
      },
      {
        field: "gol",
        header: "gol"
      },
      {
        field: "des",
        header: "des"
      },
      {
        field: "arm",
        header: "arm"
      },
      {
        field: "fin",
        header: "fin"
      },
      {
        field: "vel",
        header: "vel"
      },
      {
        field: "tec",
        header: "tec"
      },
      {
        field: "pas",
        header: "pas"
      },
      {
        field: "val",
        header: "val"
      },
      {
        field: "med",
        header: "med"
      },
      {
        field: "car",
        header: "car"
      },
    ];

    return (
      <div className='primary'>
        <DataTable value={this.state.players} autoLayout={true}>
          {columns.map((e) => {
            const st = {
              textAlign: 'center',
              width: '500px',
              color: (e.field === 'name' || e.field === 'med') ? 'red' : '',
            };
            return <Column key={e.field} field={e.field} header={e.header} style={st} />;
          })}
          {/* <Column field="P" header="P" style={st} />
          <Column field="name" header="Name" style={st} />
          <Column field="age" header="Age" style={st} />
          <Column field="gol" header="Gol" style={st} />
          <Column field="des" header="Des" style={st} />
          <Column field="arm" header="Arm" style={st} />
          <Column field="fin" header="Fin" style={st} />
          <Column field="vel" header="Vel" style={st} />
          <Column field="tec" header="Tec" style={st} />
          <Column field="pas" header="Pas" style={st} />
          <Column field="val" header="Val" style={st} /> */}
        </DataTable>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
