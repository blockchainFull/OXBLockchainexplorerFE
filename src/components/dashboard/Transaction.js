import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction }) => {
const transactions = transaction.map((tra) => (

    <tr className="naji-TableBodyRow_row" key={tra.txid}>
        <td className="naji-width-200"><Link to={`/transdetail/${tra.hash}`} className="naji_link"><span>{tra.hash.slice(0,5)}...{tra.hash.slice(tra.hash.length-5, tra.hash.length)}</span></Link></td>
        <td className="naji-width-150"><span>{tra.from.slice(0,5)}...{tra.from.slice(tra.from.length-5, tra.from.length)}</span></td>
        <td className="naji-width-150"><span>{tra.to.slice(0,5)}...{tra.to.slice(tra.to.length-5, tra.to.length)}</span></td>
        <td className="naji-width-150"><span>{tra.value}</span></td>
        <td className="naji-width-150 "><span>{tra.createdAt}</span></td>
    </tr>
  ));

  return (
    <Fragment>
      <div className="naji-LandingPage_epochList">
        <div className="naji-EpochList_epochListContainer">
            <div className="naji-Table_tableContainer">
                <div className="naji-Table_title">
                    <div className="naji-DividerWithTitle_dividerContainer">
                        <div className="naji-DividerWithTitle_line">
    
                        </div>
                        <span className="naji-DividerWithTitle_title">Latest Transactions</span>
                    </div>
                </div>                
                <div className="naji-Table">
                  <table>
                    <thead className="naji-TableHead_headContainer">
                      <tr>
                        <th className="naji-width-200">Hash</th>
                        <th className="naji-width-150">From</th>
                        <th className="naji-width-150">To</th>
                        <th className="naji-width-150">Amount</th>
                        <th className="naji-width-150">Time</th>
                      </tr>
                    </thead>
                    <tbody className="naji-TableBody_bodyContainer">
                      {transactions}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
          {/* <div className="naji-ShowMoreButtonDecorator_root">
              <a className="naji-LocalizedLink_link" href="#">
                  <span className="naji-ShowMoreButtonDecorator_showMoreButton">show more</span>
              </a>
          </div> */}
      </div>
    </Fragment>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.array.isRequired,
};

export default connect(null)(Transaction);
