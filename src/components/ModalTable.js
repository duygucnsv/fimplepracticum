import React from "react";
import { Container, Row } from "react-bootstrap";
import { useStore } from "../store";

const ModalTable = () => {
  const { paymentState } = useStore();

  const { paymentTable } = paymentState;

  return (
    <Container lg={10}>
      <Row>
        <table>
          <thead>
            <tr>
              <th className="table-cell">#</th>
              <th className="table-cell">Capital</th>
              <th className="table-cell">Monthly Payment</th>
              <th className="table-cell">Rate</th>
              <th className="table-cell">KKDF</th>
              <th className="table-cell">BSMV</th>
            </tr>
          </thead>
          <tbody>
            {paymentTable.map((item) => (
              <tr key={item.paymentNo}>
                <td className="table-cell">{item.paymentNo}</td>
                <td className="table-cell">{item.capital}</td>
                <td className="table-cell">{item.monthlyPayment}</td>
                <td className="table-cell">{item.rate}</td>
                <td className="table-cell">{item.KKDF}</td>
                <td className="table-cell">{item.BSMV}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default ModalTable;
