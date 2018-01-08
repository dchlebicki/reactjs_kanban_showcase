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
  }

  render() {
    if(this.state.active) {
      return (
        <div class="kanban-card" id={this.id}>
          <button type="button" class="btn btn-xl btn-danger kanban-card-btn-remove" onClick={this.disable()}>
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <h5>{this.title}</h5>
          {this.description}  
        </div>
      )
    } else {
      return ""
    }
  }

  disable() {
    this.state.active = false;
    this.render()
  }
} 
/*
function KanbanCard(props) {
  return (
    <div class="kanban-card" id={props.title}>
      <button type="button" class="btn btn-xl btn-danger kanban-card-btn-remove" onClick={props.onClick}>
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
      <h5>{props.title}</h5>
      {props.description}  
    </div>
  )
}
*/
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
      //for each child -> KanbanColumn
      this.children
    )
  }
}

ReactDOM.render(
  //<KanbanCard id="1" onClick="console.log('works')" title="INSY Referat vorbereiten" description="referat über react js, mein teil: praktisch zeigen"/>,
  <KanbanBoard>
    <KanbanColumn type="todo" title="To do">
      <KanbanCard title="Hausaufgaben machen" description="Mathematik, SEW" />
      <KanbanCard title="Blumen gießen" description="" />
      <KanbanCard title="Katze füttern" description="Mathematik, SEW" />
    </KanbanColumn>
    <KanbanColumn type="inprogress" title="In progress">
      <KanbanCard title="In die Schule gehen" description="Mathematik, SEW" />
      <KanbanCard title="Blumen gießen" description="" />
      <KanbanCard title="Katze füttern" description="Mathematik, SEW" />
    </KanbanColumn>
    <KanbanColumn type="done" title="Done">
      <KanbanCard title="Hausaufgaben machen" description="Mathematik, SEW" />
      <KanbanCard title="Blumen gießen" description="" />
      <KanbanCard title="Katze füttern" description="Mathematik, SEW" />
    </KanbanColumn>
  </KanbanBoard>,
  document.getElementById('kanban-root')
)
