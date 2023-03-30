import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,PieChart, Pie, Cell 
  } from "recharts";
import { CenturyView } from "react-calendar";
  
const PhysicalSymptomsAnalytics = (props) => {
    const data = [
        {
          name: "wk1",
          'Hunger level': 7,
        },
        {
          name: "wk2",
          'Hunger level': 5
        },
        {
          name: "wk3",
          'Hunger level': 4
        },
        {
          name: "wk4",
          'Hunger level': 4
        },
        {
          name: "wk5",
          'Hunger level': 2
        },
        {
          name: "wk6",
          'Hunger level': 2
        }
      ];

      const data4 = [
        {
          name: "wk1",
          'frequency': 5,
        },
        {
          name: "wk2",
          'frequency': 6
        },
        {
          name: "wk3",
          'frequency': 5
        },
        {
          name: "wk4",
          'frequency': 5
        },
        {
          name: "wk5",
          'frequency': 3
        },
        {
          name: "wk6",
          'frequency': 2
        }
      ];
      const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
      const data02 = [
        { name: "A1", value: 100 },
        { name: "A2", value: 300 },
        { name: "B1", value: 100 },
        { name: "B2", value: 80 },
        { name: "B3", value: 40 },
        { name: "B4", value: 30 },
        { name: "B5", value: 50 },
        { name: "C1", value: 100 },
        { name: "C2", value: 200 },
        { name: "D1", value: 150 },
        { name: "D2", value: 50 }
      ];
      
  function handleMakeALogButtonClicked() {
    props.HandleMakeALog();
  }
  function handleViewALogButtonClicked() {
    props.HandleViewLogPressed();
  }

  function handleViewAnalyticsButtonClicked() {
    props.HandleAnalyticsPressed();
  }
  //handleLearnButtonClicked
  function handleLearnButtonClicked() {
    props.HandleLearnPressed();
  }
  function handleTestButtonClicked() {
    props.HandleTestPressed();
  }

  return (
    <div className="">
      <div alignItems
        style={{
          padding: "10px",
          display: "flex"
        }}
      >
        <div
          style={{
            width: "330px",
            height: "350px",
            backgroundColor: "white",
            borderRadius: "25px",
            marginLeft: 0,
            padding: "10px",
            marginTop: 18
          }}
        >
          <h3
            style={{
              marginTop: "3px",
              textAlign: "center"
            }}
          >
            Physical Symptoms
          </h3>
          <p style={{
            textAlign: "center",
            marginTop: "-10px",
            fontSize: "15px"
          }}>This report shows the percentage of all your logs this month where you reported each symptom.</p>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "20px",
                    marginTop: "-3.5px",
                  }}
                >
                  Bloating
                </p>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={50}
                    completedClassName="barCompleted"
                  />
                </div>
              </div>
              
            </div>
          </div>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "12px",
                    marginTop: "-3.5px",
                  }}
                >
                  Headaches
                </p>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={20}
                    completedClassName="barCompleted2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "35px",
                    marginTop: "-3.5px",
                  }}
                >
                  Gas
                </p>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={60}
                    completedClassName="barCompleted3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "33px",
                    marginTop: "-3.5px",
                  }}
                >
                  Acne
                </p>
              </div><div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={10}
                    completedClassName="barCompleted4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "9px",
                    marginTop: "-3.5px",
                  }}
                >
                  Low Energy
                </p>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={50}
                    completedClassName="barCompleted"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "25px",
                  opacity: "80%",
                  borderRadius: "25px",
                  backgroundColor: "#8CD9CF",
                  paddingTop: "8px",
                  float: "left",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "29px",
                    marginTop: "-3.5px",
                  }}
                >
                  Stress
                </p>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <ProgressBar
                    completed={80}
                    completedClassName="barCompleted5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
            paddingLeft: "10px",
            marginTop: "0px"
        }}>
        <div style={{
            backgroundColor: "white",
            height: "310px",
            borderRadius: "25px"
        }}>
            <h3 style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "15px"
            }}>Hunger level changes in the past month</h3>
        <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 55,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Hunger level" fill="#8CD9CF" />
    </BarChart>
    </div>
    </div>
    
    <div style={{
        paddingLeft: "10px",
        marginTop: "20px"
    }}>
    <div style={{
        backgroundColor: "white",
        borderRadius: "25px",
        width: "330px",
        height: "305px"
    }}>
        <div style={{
            padding: "10px"
        }}>
        <h3 style={{
            textAlign: "center",
            marginTop: "10px"
        }}>Trigger Foods</h3>
        <p style={{
            fontSize: "15px",
            textAlign: "center"
        }}>Here is a list of trigger foods that you frequently wrote about in your trigger foods log. It may be a good idea to try eliminating or reducing your consumption of these foods to see if your symptoms improve. </p>
        <ul style={{
            paddingLeft: "30px",
            paddingTop: "10px"
        }}
        >
            <li className="colored-bullet">Dairy</li>
            <li className="colored-bullet">Spinach</li>
            <li className="colored-bullet">Peanut butter</li>
            <li className="colored-bullet">Caffeine</li>
        </ul>
        
        </div>
        </div>
    </div>

    
      </div>

      <div alignItems
        style={{
          padding: "10px",
          display: "flex"
        }}
      >

<div style={{
        paddingLeft: "0px",
        marginTop: "-10px"
    }}>
    <div style={{
        backgroundColor: "white",
        borderRadius: "25px",
        width: "340px",
        height: "280px"
    }}>
        <div style={{
            padding: "10px"
        }}>
        <h3 style={{
            textAlign: "center",
            marginTop: "10px"
        }}>Bowel Movements</h3>
        <p style={{
            fontSize: "15px",
            textAlign: "center"
        }}>Here’s a list of words you frequently used in your bowel movement logs. It may be a good idea to look at the frequently used words in your trigger food log to determine if those foods are affecting your bowel movements.</p>
        <ul style={{
            paddingLeft: "30px",
            paddingTop: "10px"
        }}
        >
            <li className="colored-bullet">Type 7</li>
            <li className="colored-bullet">Diarrhoea</li>
            <li className="colored-bullet">Urgency</li>
        </ul>
        
        </div>
        </div>
    </div>

    <div style={{
        paddingLeft: "10px",
        marginTop: "-100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
    <div style={{
         backgroundColor: "white",
         borderRadius: "25px",
         width: "330px",
         height: "310px",
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
    }}>
        <h3 style={{
            marginTop: 80,
            marginBottom: -70
        }}>Data that suits pie chart</h3>

        <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8CD9CF"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#1a8cff"
        label
      />
    </PieChart>
        
        </div>
    </div>

    <div style={{
            paddingLeft: "10px",
            marginTop: "-88px"
        }}>
        <div style={{
            backgroundColor: "white",
            height: "310px",
            borderRadius: "25px"
        }}>
            <h3 style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "15px"
            }}>Meal frequency changes in the past month</h3>
        <BarChart
      width={500}
      height={200}
      data={data4}
      margin={{
        top: 5,
        right: 55,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="frequency" fill="#1a8cff" />
    </BarChart>
    </div>
    </div>

      </div>
    </div>
  );
};

export default PhysicalSymptomsAnalytics;
