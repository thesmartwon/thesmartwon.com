import { h, Component } from 'preact'

export class RetirementTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <svg id="retirementTimeline">
        <style>{`
          .small { font: italic 13px sans-serif; }
          .heavy { font: bold 30px sans-serif; }

          /* Note that the color of the text is set with the    *
          * fill property, the color property is for HTML only */
          .Rrrrr { font: italic 40px serif; fill: red; }
        `}</style>
        <g transform={`matrix(1.50,0,0,1.50,100,100)`}>
          <text x="20" y="35" class="small">My</text>
          <text x="40" y="35" class="heavy">cat</text>
          <text x="55" y="55" class="small">is</text>
          <text x="65" y="55" class="Rrrrr">Grumpy!</text>
        </g>
      </svg>
    );
  }
}
