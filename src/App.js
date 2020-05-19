import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function App() {
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable(generateSample())
    doc.save('a.pdf')
  }

  const generateSample = () => {
    return {
      rowPageBreak: 'avoid',
      head: [['Allocation', 'Score', 'Result'],
            ['adfa', 'fsadf']
              ],
      body: [
        [{content: 'Civil Worker', colSpan: 3, styles: {fillColor: '#c4c4c4'}}],
        ['Luu Huynh Phong', '10', 'Passed'],
        ['Van Huynh Thi Thanh', '12', 'Passed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
        ['An Nguyen Quang', '7', 'Failed'],
      ]
    }
  }
  
  return (
    <div className="App">
      <button onClick={handleExportPDF}>Click me</button>
    </div>
  );
}

export default App;
