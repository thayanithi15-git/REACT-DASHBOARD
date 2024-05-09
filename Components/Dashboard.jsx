import React from "react";
import './Dashboard.css'

function Dashboard(){
  return(
    <div id="left">
      <aside>
        <div className="image">
            <img src="man.png" alt="" />
            <h3 id="materio"><b><i class="fa-solid fa-shield-halved"></i>&ensp;MATERIO</b></h3>
        </div>
        <div className="side">
            <div className="names1"><i className="fas fa-home"></i>&ensp;&ensp;&ensp;DASHBOARD</div><br /><br />
            <div className="names"><i class="fa-solid fa-circle-up"></i>&ensp;&ensp;&ensp;ACCOUNT SETTINGS</div><br /><br />
            <div className="name"><i className="fas fa-shop"></i>&ensp;&ensp;&ensp;<select className="name">
                <option className="page" id="arrow">SHOPS &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;</option></select></div><br /><br />
            <div className="names"><i class="fa-solid fa-user"></i>&ensp;&ensp;&ensp; LOGIN </div><br /><br />
            <div className="names"><i className="fas fa-book"></i>&ensp;&ensp;&ensp; ANALYSIS</div><br /><br />
            <div className="names"><i className="fas fa-file"></i> &ensp;&ensp;&ensp;ERROR </div><br /><br />
            <div className="names"><i className="fas fa-computer"></i>&ensp;&ensp; CARDS</div><br /><br />
            <div className="name"><i className="fas fa-shop" id="arrow"></i>&ensp;&ensp; <select className="name">
                <option className="page">APPLICATION &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&ensp;&nbsp;</option></select ></div><br /><br />
            <div className="names"><i className="fas fa-gear"></i>&ensp;&ensp;&ensp;SET UP </div><br /><br />
        </div>
      </aside>
      <header>
          <div className="nav">
              <div className="shop"><h1>Materio's Shop</h1></div><input id='search' type="text"></input><button id='searchbtn'>Search</button>
              <ul className="links">
                  <li className="notice1">CONTACT US&ensp;&ensp;</li>
                  <li className="notice">HELP CENTER&ensp;&ensp;</li>
                  <li className="nam"><i className="fas fa-user"></i>&ensp;&ensp;&ensp;Jackson</li>
              </ul>
          </div>
      </header>
      <main>
          <div className="main">
              <div className="letter">
                  <h2 className="fff" style={{color: "red"}}>&ensp;&ensp;&ensp;Well begun is half done</h2>
                  <p className="ff" style={{color: "black"}}>&ensp;&ensp;&ensp;&ensp;Complete the following steps to sell</p><br />
              </div>
              <div className="mah">
                  <div className="v" style={{display: "block", paddingLeft: "1%"}}>
                      <div className="b">
                          <h4 className="boxes">1. Certification&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</h4>
                          <h2 id='go' style={{backgroundColor: "#fff", color: "red", width: "50px", height: "30px", textAlign: "center",
                              borderRadius: "5px", marginBottom: "1%" }}>GO</h2>
                      
                      <div className="upload">
                          <p>Upload qualification information</p>
                      </div>
                      </div>
                  </div>
                  <div className="q" style={{display: "block", paddingLeft: "1%"}}>
                      <div className="bc">
                          <h4 className="booxe">2. Upload a product&ensp;&ensp;&ensp;&ensp;&ensp;</h4>
                          <h2 id='go' style={{backgroundColor: "#fff", color: "red", width: "50px", height: "30px", textAlign: "center",
                              borderRadius: "5px", marginBottom: "1%" }}>GO</h2>
                      
                      <div className="upl">
                          <p>Find the product information</p>
                      </div>
                      </div>
                  </div>
                  <div className="r" style={{display: "block", paddingLeft: "1%"}}>
                      <div className="bcd">
                          <h4 className="boxes">3. Open for sale&ensp;&ensp;&ensp;</h4>
                          <h2 id='go' style={{backgroundColor: "#fff", color: "red", width: "50px", height: "30px", textAlign: "center",
                              borderRadius: "5px", marginBottom: "1%" }}>GO</h2>
                      
                      <div className="up">
                          <p>Choose to open any source</p>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="bottom">
                <div class="today">
                    <h3 class="to">Today's Data</h3>
                    <h4 class="data">More</h4>
                </div>
    
                <div class="first1">
                    <h3 class="payam">Payment amount 
                        <h2 class="sym1"><i class="fa-sharp fa-solid fa-yen-sign"></i></h2>
                    </h3>
                    <h3 class="num1">8,992</h3>
                <h3 class="upl1">Yesterday 8638</h3>
                </div>

                <div class="first2">
                    <h3 class="payam">Payment order 
                        <h2 class="sym2"><i class="fa-sharp fa-solid fa-file"></i></h2>
                    </h3>
                    <h3 class="num1">793</h3>
                <h3 class="upl1">Yesterday 753</h3>
                </div>

                <div class="first3">
                    <h3 class="payam">Paying customer
                        <h2 class="sym3"><i class="fa-sharp fa-solid fa-users"></i></h2>
                    </h3>
                    <h3 class="num1">280</h3>
                <h3 class="upl1">Yesterday 320</h3>
                </div>

                <div class="first4">
                    <h3 class="payam">Pending orders
                        <h2 class="sym4"><i class="fa-sharp fa-solid fa-truck"></i></h2>
                    </h3>
                    <h3 class="num1">480</h3>
                <h3 class="upl1">Yesterday 470</h3>
                </div>

                <div class="sec1">
                    <h3 class="payam1">Live stream viewers 
                    </h3>
                    <h3 class="num2">23,466</h3>
                <h3 class="upl2">Yesterday 22089</h3>
                </div>

                <div class="sec2">
                    <h3 class="payam1">New attention
                    </h3>
                    <h3 class="num2">4,890</h3>
                <h3 class="upl2">Yesterday 3800</h3>
                </div>

                <div class="sec3">
                    <h3 class="payam1">Cumulative attention
                    </h3>
                    <h3 class="num2">135,743</h3>
                <h3 class="upl2">Yesterday 130493</h3>
                </div>

                <div class="sec4">
                    <h3 class="payam1">Number of orders
                    </h3>
                    <h3 class="num2">5,249</h3>
                <h3 class="upl2">Yesterday 4680</h3>
                </div>
    
                <div class="oper">
                    <h3 class="to">Operations assistant</h3>
                    <h4 class="data">More</h4>
                </div>
    
                <div class="first11">
                    <h3 class="payam11">Smart telecast live
                        <h2 class="sym11"><i class="fa-solid fa-tv"></i></h2>
                    </h3>
                <h3 class="upl111">Live sales in wechat</h3>
                </div>

                <div class="first21">
                    <h3 class="payam11">Mini program store
                        <h2 class="sym221"><i class="fa-solid fa-gift"></i></h2>
                    </h3>
                <h3 class="upl111">Wechat mini store</h3>
                </div>

                <div class="first31">
                    <h3 class="payam11">Distribution market
                        <h2 class="sym31"><i class="fa-solid fa-network-wired"></i></h2>
                    </h3>
                <h3 class="upl111">One-click promotion</h3>
                </div>

                <div class="first41">
                    <h3 class="payam11">Coupon
                        <h2 class="sym41"><i class="fa-solid fa-money-bill"></i></h2>
                    </h3>
                <h3 class="upl111">Store the essestials</h3>
                </div>

                <div class="sec11">
                    <h3 class="payam22">Store constructions
                        <h2 class="sym21"><i class="fa-solid fa-store"></i></h2>
                    </h3>
                <h3 class="upl22">Can be customized</h3>
                </div>

                <div class="sec21">
                    <h3 class="payam22">Promoting ads
                        <h2 class="sym22"><i class="fa-solid fa-rectangle-ad"></i></h2>
                    </h3>
                <h3 class="upl22">Wechat billion exposure</h3>
                </div>

                <div class="sec31">
                    <h3 class="payam22">Promotion rebate
                        <h2 class="sym23"><i class="fa-solid fa-tag"></i></h2>
                    </h3>
                <h3 class="upl22">Help you sell goods</h3>
                </div>

                <div class="sec41">
                    <h3 class="payam22">Asset management
                        <h2 class="sym24"><i class="fa-solid fa-chart-pie"></i></h2>
                    </h3>
                <h3 class="upl22">Income and withdrawal</h3>
                </div>


            </div>
      </main>
    </div>
  );
}

export default Dashboard;
