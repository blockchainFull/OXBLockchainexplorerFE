import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Block from './Block';
import Transaction from './Transaction';
import { getLatestBlocks } from '../../actions/block';
import { getLatestTransactions } from '../../actions/transaction';
import logo from '../../img/orangebull.png';
import '../../style.css';

const Dashboard = ({  
  getLatestBlocks,
  getLatestTransactions,
  block,
  transaction
}) => {
  useEffect(() => {
    getLatestBlocks();
    getLatestTransactions();
  }, [getLatestTransactions]);

//   setTimeout(() => {
//       getLatestBlocks();
//   }, 4000);

  return (
    <section className="naji-container">
            
            <header className="naji-header">
                <div className="naji-header_logoContainer">
                    <a className="" href="#">
                        <img src={logo}  className="naji-header_logoImg" alt="logo" />
                    </a>
                </div>
                <div className="naji-header_titleContainer">
                    <a className="naji-LocalizedLink_link" href="#">
                        <b>OX</b><span> BlockChain Explorer</span>
                    </a>
                </div>
                <div className="naji-Header_triangleSign">
                    <div className="naji-Header_straightLine">
                
                    </div>
                    <div className="naji-Header_triangle">
                        <div className="naji-Header_innerTriangle">
                
                        </div>
                    </div>
                </div>
            </header>

            {/* <div className="naji-searchContainer">
                <h2 className="naji-Search_searchTitle">Search</h2>
                <div className="naji-Search_searchContent">
                    <div className="naji-Search_searchInput naji-SimpleFormField_root">
                        <div className="naji-SimpleFormField_inputWrapper">
                            <input className="naji-SimpleInput_input" placeholder="Search forsdfgsdf epochs, blocks, addresses and transactions">
                        </div>
                    </div>  
                    <button className="naji-Search_searchButton naji-SimpleButton_root">
                        <div className="naji-Search_searchButtonIcon">
                            <div className="naji-Search_searchButtonInner">
                            </div>
                        </div>
                    </button>
                </div>
            </div> */}

        
        
            <Block block={block.blocks} />

            <Transaction transaction={transaction.transactions} />

    </section>
  );
};

Dashboard.propTypes = {
  getLatestBlocks: PropTypes.func.isRequired,
  block: PropTypes.object.isRequired,
  transaction: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  block: state.block,
  transaction: state.transaction
});

export default connect(mapStateToProps, { getLatestTransactions, getLatestBlocks })(
  Dashboard
);
