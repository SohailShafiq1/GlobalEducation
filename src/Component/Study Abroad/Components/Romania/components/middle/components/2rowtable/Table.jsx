import React from 'react';
import tablecss from './table.module.css';

function Table({ headings, rows }) {
  return (
    <div>
      <div className={tablecss.container} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">
        <table>
          <thead>
            <tr>
              {headings.map((heading,index) => (
                <th key={index}>{heading}</th>))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {headings.map((heading, subIndex) => (
                  <td key={subIndex}>{row[heading]}</td> ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
