import { useState } from "react"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import "./App.css"

function App() {
  // Sample data for rows
  const initialData = [
    { id: 1, name: "Laptop", quantity: 5, price: "$300" },
    { id: 2, name: "Smartphone", quantity: 3, price: "$200 " },
    { id: 3, name: "Smart TV", quantity: 8, price: "$300" },
    { id: 4, name: "Digital Camera", quantity: 2, price: " $200" },
    { id: 5, name: "Fitness Tracker", quantity: 6, price: "$30" },
    { id: 6, name: "Gaming Console", quantity: 4, price: "$300" },
    { id: 7, name: "Tablet", quantity: 10, price: "$100" },
    { id: 8, name: "Bluetooth Speaker 8", quantity: 7, price: "$20" },
    { id: 9, name: "Smartwatch", quantity: 1, price: 23.99 },
    { id: 10, name: "Wireless Headphones", quantity: 9, price: "$50" },
  ]

  const cellStyle = {
    padding: "12px",
    textAlign: "left",
  }

  // State to manage data
  //eslint-disable-next-line
  const [data, setData] = useState(initialData)

  const doc = new jsPDF()

  const exportPdfHandler = () => {
    // doc.autoTable({ html: "#product-table" })
    // doc.save("product.pdf")

    autoTable(doc, {
      html: "#product-table",
      bodyStyles: { fillColor: "#b5e4d4" },
      columnStyles: {
        // 0: { fillColor: [172, 157, 230], halign: "center" },
        0: { halign: "center" },
      },
      theme: "grid",
    }),
      doc.save("product.pdf")

    // console.log("Exported")
  }

  return (
    <>
      <button className="export-btn" onClick={exportPdfHandler}>
        Export PDF
      </button>
      <table
        style={{ borderCollapse: "collapse", width: "100%" }}
        id="product-table"
      >
        <thead>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              background: "rgb(175, 175, 175)",
            }}
          >
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Product Name</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Price</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={cellStyle}>{item.id}</td>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.quantity}</td>
              <td style={cellStyle}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
