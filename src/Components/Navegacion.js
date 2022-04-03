import React from "react";
import '../CSS/Navegacion.css'
class Navegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {},
    };
    this.els = {};
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();

    const sizes = {};
    Object.keys(this.els).forEach((key) => {
      const el = this.els[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = { left, right };
    });
  }

  render() {
    return (
      <div className="Tabs_Container">
        <div className="Tabs" ref={(el) => (this.root = el)}>
          {React.Children.map(this.props.children, (child, i) => {
            let className = `Tabs__Tab`;
            if (child.key === this.props.active) {
              className = `${className} Tabs__Tab--active`;
            }
            return (
              <div
                className={className}
                onClick={() => {
                  this.props.onChange(child.key);
                }}
                ref={(el) => (this.els[child.key] = el)}
              >
                {child}
              </div>
            );
          })}
          <div className="Tabs_Underline"></div>
        </div>
      </div>
    );
  }
}

export default Navegacion;
