import { css, LitElement, html } from 'lit-element';
import { style } from '../dist/drawflow.style';
import '../dist/drawflow.min';

class DrawflowElement extends LitElement {
  static get styles() {
    return [
      style,
      css`
        #drawflow {
          display: block;
          position: relative;
          width: 100%;
          height: 800px;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="drawflow"></div>
    `;
  }

  firstUpdated() {
    const container = this.shadowRoot?.getElementById('drawflow');
    const editor = new Drawflow(container);

    editor.reroute = true;
    editor.reroute_fix_curvature = true;

    editor.start();

    const data = {
      name: ''
    };

    editor.addNode('foo', 1, 1, 100, 200, 'foo', data, 'Foo');
    editor.addNode('bar', 1, 1, 400, 100, 'bar', data, 'Bar A');
    editor.addNode('bar', 1, 1, 400, 300, 'bar', data, 'Bar B');

    editor.addConnection(1, 2, "output_1", "input_1");
    editor.addConnection(1, 3, "output_1", "input_1");
  }
}

customElements.define("drawflow-element", DrawflowElement);

/*

ExportClear
Import Template
Select Template
Heading: select Text
Hero image: select
Background-slect
Google sheet loader
Apply Brand Image
Employee Image
Remove Background
Export
{
    "drawflow": {
        "Home": {
            "data": {
                "5": {
                    "id": 5,
                    "name": "template",
                    "data": {
                        "template": "Import Template"
                    },
                    "class": "template",
                    "html": "\n            
\n              
 Template
\n              
\n                Ger Vars\n                
\n                Output template with vars\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "13",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 194,
                    "pos_y": 97
                },
                "13": {
                    "id": 13,
                    "name": "select",
                    "data": {
                        "name": "Select Template"
                    },
                    "class": "select",
                    "html": "\n        
\n          
\n            \n            Select 
\n            
\n          
\n          
\n        
\n        ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "5",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "16",
                                    "output": "input_1"
                                },
                                {
                                    "node": "15",
                                    "output": "input_1"
                                },
                                {
                                    "node": "14",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 456,
                    "pos_y": 160
                },
                "14": {
                    "id": 14,
                    "name": "generic",
                    "data": {
                        "name": "Heading: select Text"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "13",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "17",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 745,
                    "pos_y": 91
                },
                "15": {
                    "id": 15,
                    "name": "generic",
                    "data": {
                        "name": "Hero image: select"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "13",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "17",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 751,
                    "pos_y": 202
                },
                "16": {
                    "id": 16,
                    "name": "generic",
                    "data": {
                        "name": "Background-slect"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "13",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "17",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 750,
                    "pos_y": 327
                },
                "17": {
                    "id": 17,
                    "name": "generic",
                    "data": {
                        "name": "Google sheet loader"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "14",
                                    "input": "output_1"
                                },
                                {
                                    "node": "15",
                                    "input": "output_1"
                                },
                                {
                                    "node": "16",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "18",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 1048,
                    "pos_y": 191
                },
                "18": {
                    "id": 18,
                    "name": "generic",
                    "data": {
                        "name": "Apply Brand Image"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "17",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "19",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 1325,
                    "pos_y": 189
                },
                "19": {
                    "id": 19,
                    "name": "select",
                    "data": {
                        "name": "Employee Image"
                    },
                    "class": "select",
                    "html": "\n        
\n          
\n            \n            Select 
\n            
\n          
\n          
\n        
\n        ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "18",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "20",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 1602,
                    "pos_y": 162
                },
                "20": {
                    "id": 20,
                    "name": "generic",
                    "data": {
                        "name": "Remove Background"
                    },
                    "class": "generic",
                    "html": "\n          
\n            
\n            
 \n          
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "19",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "21",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 1869,
                    "pos_y": 184
                },
                "21": {
                    "id": 21,
                    "name": "publish",
                    "data": {},
                    "class": "publish",
                    "html": "\n          
\n            
\n              \"upload--v1\"/\n              Publish
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "20",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "pos_x": 2137,
                    "pos_y": 189
                }
            }
        },
        "Other": {
            "data": {
                "8": {
                    "id": 8,
                    "name": "personalized",
                    "data": {},
                    "class": "personalized",
                    "html": "\n            
\n              Personalized\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "12",
                                    "input": "output_1"
                                },
                                {
                                    "node": "12",
                                    "input": "output_2"
                                },
                                {
                                    "node": "12",
                                    "input": "output_3"
                                },
                                {
                                    "node": "12",
                                    "input": "output_4"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "9",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 764,
                    "pos_y": 227
                },
                "9": {
                    "id": 9,
                    "name": "dbclick",
                    "data": {
                        "name": "Hello World!!"
                    },
                    "class": "dbclick",
                    "html": "\n            
\n            
 Db Click
\n              
\n                Db Click here\n                
\n                  
\n                    ×\n                    Change your variable {name} !\n                    
\n                  
\n\n                
\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "8",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "12",
                                    "output": "input_2"
                                }
                            ]
                        }
                    },
                    "pos_x": 209,
                    "pos_y": 38
                },
                "12": {
                    "id": 12,
                    "name": "multiple",
                    "data": {},
                    "class": "multiple",
                    "html": "\n            
\n              
\n                Multiple!\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        },
                        "input_2": {
                            "connections": [
                                {
                                    "node": "9",
                                    "input": "output_1"
                                }
                            ]
                        },
                        "input_3": {
                            "connections": []
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_2": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_3": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_4": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 179,
                    "pos_y": 272
                }
            }
        }
    }
} */