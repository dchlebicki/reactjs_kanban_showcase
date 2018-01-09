import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class KanbanCard extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.id
    this.title = props.title
    this.description = props.description
    this.state = {
      active: true
    }

    this.disable = this.disable.bind(this)
  }

  render() {
    if(this.state.active) {
      return (
        <div class="kanban-card" id={this.id}>
          <button type="button" class="btn btn-danger kanban-card-btn-remove" onClick={this.disable}>
            <span class="glyphicon glyphicon-remove"></span>&nbsp;
          </button>
          <h5>{this.title}</h5>
          {this.description}  
        </div>
      )
    } else {
      return null
    }
  }

  disable() {
    this.setState({active: false})
  }
}

class KanbanColumn extends React.Component {
  constructor(props) {
    super(props)
    this.type = props.type
    this.title = props.title
    this.children = props.children
  }
  
  render() {
    return (
      <div class="col-md">
        <h6>{this.title}</h6>
        <div class="kanban-col" id={"kanban-" + this.type}>
          {this.children}
        </div>
      </div>        
    )
  }
}

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props)
    this.children = props.children
  }

  render() {
    return (
      this.children
    )
  }
}

ReactDOM.render(
  <KanbanBoard>
    <KanbanColumn type="todo" title="To do">
      <KanbanCard title="Hausaufgaben machen" description="vieles" />
      <KanbanCard title="Blumen gießen" description="Die im Wohnzimmer, Küche, Schlafzimmer und Garten" />
      <KanbanCard title="Einkaufen" description="Katzenfutter, Klopapier, Schokolade" />
    </KanbanColumn>
    <KanbanColumn type="inprogress" title="In progress">
      <KanbanCard title="Weiterarbeiten am Diplomprojekt" description="Modelle + Texturen erstellen" />
      <KanbanCard title="INSY React Referat" description="10.1.2018" />
      <KanbanCard title="In die Schule gehen" description="Ich kriege nicht genug Schlaf" />
    </KanbanColumn>
    <KanbanColumn type="done" title="Done">
      <KanbanCard title="React lernen" description="React JS-Framework anschauen" />
      <KanbanCard title="Weihnachtsgeschenke kaufen" description="bis spätestens 23.12.17" />
      <KanbanCard title="'Schöne neue Welt' lesen" description="Bis 8.1.2018" />
    </KanbanColumn>
  </KanbanBoard>,
  document.getElementById('kanban-root')
)
