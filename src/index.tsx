import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartScatterCoreModule, IgrDataChartScatterModule,
         IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries, IgrCategoryXAxis, IgrLineSeries, IgrStepLineSeries,
       } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[] = [];
    public data2: any[] = [];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);        
        
        this.onXAxisCrossValueChange = this.onXAxisCrossValueChange.bind(this);
        this.onYAxisCrossValueChange = this.onYAxisCrossValueChange.bind(this);

        this.state = {
            xAxisCrossValue: 0,
            yAxisCrossValue: 0
        }
        
//        this.initData();
        this.data = [
          { X:-360, sinValue:0.00,cosValue:0.75 },
          { X:-320, sinValue:0.25,cosValue:0.75 },
          { X:-280, sinValue:0.00,cosValue:1.00 },
          { X:-240, sinValue:0.00,cosValue:0.75 },
          { X:-200, sinValue:0.00,cosValue:0.75 },
          { X:-160, sinValue:0.25,cosValue:0.75 },
          { X:-120, sinValue:0.00,cosValue:1.00 },
          { X:-80, sinValue:0.00,cosValue:0.75 },
          { X:-40, sinValue:0.00,cosValue:0.75 },
          { X:0, sinValue:0.25,cosValue:0.75 },
          { X:40, sinValue:0.00,cosValue:1.00 },
          { X:80, sinValue:0.00,cosValue:0.75 },
          { X:120, sinValue:0.00,cosValue:0.75 },
          { X:160, sinValue:0.25,cosValue:0.75 },
          { X:200, sinValue:0.00,cosValue:1.00 },
          { X:240, sinValue:0.00,cosValue:0.75 },
          { X:280, sinValue:0.00,cosValue:0.75 },
          { X:320, sinValue:0.25,cosValue:0.75 },
          { X:360, sinValue:0.00,cosValue:1.00 },
        ];

        this.onChartRef = this.onChartRef.bind(this);
        this.initData2();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="option-label">X-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.xAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-360} max={360} step={10} value={this.state.xAxisCrossValue}
                           onChange={this.onXAxisCrossValueChange}/>
                    <label className="option-label">Y-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.yAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-1.25} max={1.25} step={0.125} value={this.state.yAxisCrossValue} 
                           onChange={this.onYAxisCrossValueChange}/>
                </div>

                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        >

                        <IgrCategoryXAxis 
                          name="xAxis" 
                          interval={40} 
                          minimumValue={-360} 
                          maximumValue={360} 
                          labelLocation="InsideBottom"
                          labelTopMargin={10} 
                          crossingAxisName="yAxis" 
                          crossingValue={this.state.yAxisCrossValue} 
                          strokeThickness={1} 
                          stroke="Black" />

                        <IgrNumericYAxis  
                          name="yAxis" 
                          minimumValue={-1.25} 
                          maximumValue={1.25} 
                          interval={0.25} 
                          labelLocation="InsideLeft"
                          labelRightMargin={10} 
                          crossingAxisName="xAxis" 
                          crossingValue={this.state.xAxisCrossValue} 
                          strokeThickness={1} 
                          stroke="Black" />

                        <IgrStepLineSeries 
                          name="series1" 
                          xAxisName="xAxis" 
                          yAxisName="yAxis" 
                          markerType="Circle" 
                          valueMemberPath="sinValue" />
                        <IgrStepLineSeries 
                          name="series2" 
                          xAxisName="xAxis" 
                          yAxisName="yAxis" 
                          markerType="Circle" 
                          valueMemberPath="cosValue" />
                    </IgrDataChart>
                </div>
                <br />
                <br />
                <br />
                <div className="container" style={{height: "100%"}}>
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data2}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>

                        <IgrNumericXAxis 
                          name="xAxis" 
                          interval={40} 
                          minimumValue={-360} 
                          maximumValue={360} 
                          labelLocation="InsideBottom"
                          labelTopMargin={10} 
                          crossingAxisName="yAxis" 
                          crossingValue={this.state.yAxisCrossValue} 
                          strokeThickness={1} 
                          stroke="Black" />

                        <IgrNumericYAxis 
                          name="yAxis" 
                          minimumValue={-1.25} 
                          maximumValue={1.25} 
                          interval={0.25} 
                          crossingAxisName="xAxis" 
                          crossingValue={this.state.xAxisCrossValue} 
                          strokeThickness={1} 
                          stroke="Black" />

                        <IgrCategoryXAxis name="xAxis2" label="X" />
                        <IgrNumericYAxis name="yAxis2" />

                        <IgrLineSeries 
                          name="series3" 
                          title="USA"
                          valueMemberPath="USA"
                          xAxisName="xAxis2"
                          yAxisName="yAxis2" />
                        <IgrLineSeries 
                          name="series4" 
                          title="China"
                          valueMemberPath="China"
                          xAxisName="xAxis2"
                          yAxisName="yAxis2" />
                        <IgrScatterSplineSeries 
                          name="series5" 
                          xAxisName="xAxis"
                          yAxisName="yAxis" 
                          markerType="Circle" 
                          xMemberPath="X" 
                          yMemberPath="Russia"
                          />
                    </IgrDataChart>
                </div>

            </div>
        );
    }

    public initData() {
        for (let i = -360; i <= 360; i += 10) {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            this.data.push({ X: i, sinValue: sin, cosValue: cos });
        }
    }    

    public onXAxisCrossValueChange(e: any){
        this.setState({ xAxisCrossValue: e.target.value});
    }

    public onYAxisCrossValueChange(e: any){
        this.setState({ yAxisCrossValue: e.target.value});
    }


    public initData2() {
      this.data2 = [
          { X: -360, USA: 0.25 , China: -1.25, Russia: -0.75 },
          { X: -320, USA: -0.25, China: 1.25 , Russia: -0.15 },
          { X: -280, USA: 0.25 , China: -1.25, Russia:  0.75 },
          { X: -240, USA: -0.25, China: 1.25 , Russia:  0.25 },
          { X: -200, USA: 0.25 , China: -1.25, Russia: -0.75 },
          { X: -160, USA: -0.25, China: 1.25 , Russia: -0.5 },
          { X: -120, USA: 0.25 , China: -1.25, Russia:  0 },
          { X: -80 , USA: -0.25, China: 1.25 , Russia:  0.25 },
          { X: -40 , USA: -0.25, China: -1.25, Russia:  0.75 },
          { X: 0   , USA: 0.25 , China: 1.25 , Russia:  0.5 },
          { X: 40  , USA: -0.25, China: -1.25, Russia: -0.25 },
          { X: 80  , USA: 0.25 , China: 1.25 , Russia:  0.25 },
          { X: 120 , USA: -0.25, China: -1.25, Russia: -0.75 },
          { X: 160 , USA: 0.25 , China: 1.25 , Russia:  0.5 },
          { X: 200 , USA: -0.25, China: -1.25, Russia:  0.75 },
          { X: 240 , USA: 0.25 , China: 1.25 , Russia: -0.75 },
          { X: 280 , USA: -0.25, China: -1.25, Russia:  0.25 },
          { X: 320 , USA: 0.25 , China: 1.25 , Russia: -0.25 },
          { X: 360 , USA: -0.25, China: -1.25, Russia: -0.75 },
      ];
  }

  public onChartRef(chart: IgrDataChart) {
      if (!chart) { return; }

      chart.syncChannel = "ChannelA";
      chart.synchronizeHorizontally = true;
      chart.synchronizeVertically = true;

  }    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DataChartAxisSharing/>);

