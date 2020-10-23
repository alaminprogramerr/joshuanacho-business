import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";
import SalesChart from "variables/SalesChart";
import BudgetChart from "variables/BudgetChart";
import CurrentPriceChart from "variables/CurrentPriceChart";
import PriceChangeChart from "variables/PriceChangeChart";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">

                <CardHeader>
                  <h5 className="card-category">Chart 2</h5>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-coins text-info" />{" "}
                    Sales
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <SalesChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Chart 2</h5>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-delivery-fast  text-danger" />{" "}
                    Orders
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <BudgetChart />
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Chart 3</h5>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-money-coins text-success" />{" "}
                    Current Price
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <CurrentPriceChart />
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Chart 4 </h5>
                  <CardTitle tag="h2">
                    <i className="tim-icons icon-send text-success" />Price Change
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <PriceChangeChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Transection({this.props.transection.sevenDaysHistory[0].transection.length})</h6>
                  <p className="card-category d-inline"> today</p>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <thead>
                        <tr>
                          <th>Brand</th>
                          <th>Category</th>
                          <th>Current Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          // console.log(this.props.transection.sevenDaysHistory)
                          this.props.transection.sevenDaysHistory[0].transection.map(el => {
                            return (
                              <tr>
                                <td>
                                  <p className="text-muted">{el.brand}</p>
                                </td>
                                <td>
                                  <p className="text-muted">{el.category}</p>
                                </td>
                                <td>
                                  <p className="text-muted">{el.currentPrice}</p>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Current Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        console.log(this.props.transection.thisMonthTransection)
                        // this.props.transection.thisMonthTransection.map(el => {
                        //   return (
                        //     <tr>
                        //       <td>
                        //         <p className="text-muted">{el.brand}</p>
                        //       </td>
                        //       <td>
                        //         <p className="text-muted">{el.category}</p>
                        //       </td>
                        //       <td>
                        //         <p className="text-muted">{el.currentPrice}</p>
                        //       </td>
                        //     </tr>
                        //   )
                        // })
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  transection: state.transection,
})

export default connect(mapStateToProps)(Dashboard);
