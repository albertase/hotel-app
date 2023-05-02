import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-date-picker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-date-picker/dist/react-datepicker.css"
import defaultBcg from "../images/room-3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;

export default class Booknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  static contextType = RoomContext;

  separator(num) {
    var str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);

    if (!room) {
      return (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">SORRY</h1>
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Back to Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { name, capacity, size, price, breakfast, pets, images } = room;
    const [mainImg, ...defaultBcg] = images;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
            <div>
              <h1 className="display-4">Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src={mainImg || defaultBcg}
                  className="img-fluid"
                  alt="selected room"
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h1>Rooms Details</h1>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Room Type</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Capacity</th>
                      <td>{capacity}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{size} sqft.</td>
                    </tr>
                    <tr>
                      <th>Breakfast</th>
                      <td>
                        {breakfast === true ? `Included` : `Not Included`}
                      </td>
                    </tr>
                    <tr>
                      <th>Pets</th>
                      <td>{pets === true ? `Allowed` : `Not Allowed`}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            {/* <form action=""> */}
              <div className="row my-3">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="Fromdate"
                      className="font-weight-bolder mr-3"
                    >
                      Full Name{" "}
                    </label>
                    <input type="text" id="input" required className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="Fromdate"
                      className="font-weight-bolder mr-3"
                    >
                      From Date{" "}
                    </label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChangeStart}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Todate" className="font-weight-bolder mr-3">
                      To Date{" "}
                    </label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleChangeEnd}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <h6 className="font-weight-bolder" name="Day-Left">
                    Number of days : {daysLeft}
                  </h6>
                  <mark>
                    Please make sure Checking time is from 9 am to 12 pm
                  </mark>
                </div>
                <div className="col-md-6 col-12">
                  <h6 className="font-weight-bold">
                    Price per day :{" "}
                    <span className="badge badge-info">
                      <FontAwesomeIcon icon={faNairaSign} />{" "}
                      {this.separator(price)}
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Total Price to be paid :{" "}
                    <span className="text-primary" name="Total-Price">
                      <FontAwesomeIcon icon={faNairaSign} />{" "}
                      {this.separator(daysLeft * price)}
                    </span>
                  </h6>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="payment" className="font-weight-bolder">
                      Payment Options
                    </label>
                    <select required className="form-control" name="Payment-Method">
                      <option disabled>Select payment option</option>
                      <option value="Credit">Credit Card</option>
                      <option value="Debit">Debit Card</option>
                      <option value="checkin">Pay during Checking</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-auto">
                  <div className="col-md-6 col-12 float-right">
                    <button
                      className="btn btn-block btn-outline-primary"
                      data-toggle="modal"
                      data-target="#thanks"
                      type="submit"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            {/* </form> */}
          </div>
        </div>

        <div className="modal fade" id="thanks">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-4">
                <h3>Thank you </h3>
                <p className="lead">
                  Your room booking will only be valid, if you make payment....
                </p>
              </div>
              <div className="modal-footer">
                <StripeCheckout
                  name="Albert Hotel"
                  image="https://scontent.fabv2-1.fna.fbcdn.net/v/t1.6435-9/80970850_123317012482340_6734700348683845632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEzfdEmwKrx0RmyGo17sRdirNrvZKijvmKs2u9kqKO-WjFgqvWldAVjGszyWhWd3NNF5My7dUpzxaM7qWNaRU8&_nc_ohc=kup0LkLrjEoAX9QvN1Y&_nc_oc=AQkZxru3wj7nPv0ulkhlEPSEgwLR8JTPhBYuhjpGJo_M1DYdo3i_4XK7FmHU8F45pjk&_nc_ht=scontent.fabv2-1.fna&oh=00_AT_3m791kTcX-DP5K7KOnMJxgibbt2KeOryXrXQJZRc-3A&oe=62D75F18"
                  billingAddress
                  shippingAddress
                  description={`Your total Amount ₦ ${this.separator(
                    daysLeft * price
                  )}`}
                  amount={10 * 100}
                  stripeKey={KEY}
                >
                  <button
                    style={{
                      background: "green",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    PAY NOW
                  </button>
                </StripeCheckout>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
