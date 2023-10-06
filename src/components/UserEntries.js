import React, { useRef, useState, useEffect } from "react";

import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useStore } from "../store";
import {
  setCapital,
  setInstallment,
  setProfitRate,
  setInstallmentInterval,
  
} from "../store/userEntries/userEntriesAction";

import { calculate } from "../store/paymentEntries/paymentAction";

import Input from "./Input";
import {
  installments,

  installmentIntervals,
} from "../config/constants";
import Select from "./Select";
import ModalTable from "./ModalTable";

const UserEntries = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const {
    userEntriesState,
    paymentState,
    dispatchUserEntries,
    dispatchPayment,
  } = useStore();
  const { capital, installment, profitRate, installmentInterval} =
    userEntriesState;
  const { totalPayment, totalTaxAmount, monthlyPayment } = paymentState;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCalculate = (e) => {
    e.preventDefault();
    const payload = { capital, profitRate, installment, installmentInterval };
    dispatchPayment(calculate(payload));
  };

  return (
    <Container
      className="user-entries border border-dark"
      xs={11}
      md={4}
      lg={3}
    >
      <Form>
        <Row>
          <Col md={4}>
            <Input
              ref={inputRef}
              label="Capital"
              value={capital}
              onChange={(e) => {
                dispatchUserEntries(setCapital(e.target.value));
              }}
            />
          </Col>
          <Col md={4}>
            <Select
              label="Installment"
              value={installment}
              placeholder="Select"
              options={installments}
              onChange={(e) => {
                dispatchUserEntries(setInstallment(e.target.value));
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Select
              className="mb-3"
              label="Installment Interval"
              placeholder="Select"
              value={installmentInterval}
              options={installmentIntervals}
              onChange={(e) => {
                dispatchUserEntries(setInstallmentInterval(e.target.value));
              }}
            />
          </Col>
          <Col md={4}>
            <Input
              label="Profit Rate"
              placeholder=""
              value={profitRate}
              onChange={(e) => {
                dispatchUserEntries(setProfitRate(e.target.value));
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Input
              label="Total Refund Amount"
              value={totalPayment}
              onChange={() => {}}
            />
          </Col>

          <Col md={4}>
            <Input
              label="Monthly Installment Amount"
              value={monthlyPayment}
              onChange={() => {}}
            />
          </Col>

          <Col md={4}>
            <Input
              label="Total Tax Amount"
              value={totalTaxAmount}
              onChange={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Button
              className="mb-3"
              variant="primary"
              type="submit"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </Col>
          <Col md={4}>
            <Button
              variant="primary"
              onClick={handleShow}
              data-toggle="modal"
              buttonTitle="Payment Plan"
            >
              Payment Plan
            </Button>
          </Col>
        </Row>
      </Form>

      <Modal className="modal p-3" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PAYBACK TABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalTable />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserEntries;
