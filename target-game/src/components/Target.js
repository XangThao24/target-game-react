import React from "react";

class Target extends React.Component {

  render() {
    let { cell, show, hitTarget, name} = this.props;
    let targetItem;
    if(show) {
      targetItem = (<div 
        className="target-item"
        onClick={() => hitTarget(name)}
        >
        Show {cell}
        </div>)
    } else {
      targetItem = null;
    }

    return (
      <div 
      className="target"
      >
        {targetItem} 
      </div>
    );
  }
}

export default Target;