import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { injectIntl } from "react-intl";
import {
  Row,
  Card,
  Button,
  FormGroup,
  Label,
  Form,
  Input,
  CardBody,
} from "reactstrap";
import Select from "react-select";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import CustomSelectInput from "../common/CustomSelectInput";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  architecturealBlueprints: null,
};
const roomTypes = [
  {
    label: "Front Yard",
    value: "Front Yard",
  },
  {
    label: "Back Yard",
    value: "Back Yard",
  },
  {
    label: "Courtyard",
    value: "Courtyard",
  },
  {
    label: "Patio/Veranda",
    value: "Patio/Veranda",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const VRExterior = ({ service, orders, history }) => {
  const dropzone = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const postFormData = new FormData();
    
    const files = dropzone.current.myDropzone.files;
    files.map((file) => { postFormData.append("basic", file)});
    
    postFormData.append("serviceId", service._id);
    postFormData.append("content", JSON.stringify(formData));
    
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(`/api/briefing/save`, postFormData, config)
      .then((res) => {
        setLoading(false);
        history.push(`/thank-you/briefing/${service._id}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        NotificationManager.warning(
          "Something went wrong. Please try again",
          "Error",
          3000,
          null,
          null,
          ""
        );
      });
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSelect = (data, name) => {
    updateFormData({
      ...formData,
      [name]: data,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">
                Virtual Renovation - Exterior
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Please upload a high resolution photo of the exterior space in which the renovation will be completed.
                  </Label>
                  <Row>
                    <Colxx>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="architecturealBlueprints"
                        id="architecturealBlueprints"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                    <Colxx>
                      <FileDropzone ref={dropzone} />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Select the Desired Room or Space
                  </Label>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="desiredRoom"
                    onChange={(selectedOption) => {
                      handleSelect(selectedOption.value, "desiredRoom");
                    }}
                    options={roomTypes}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    color="primary"
                    className={`btn-shadow btn-multiple-state ${
                      loading ? "show-spinner" : ""
                    }`}
                    size="lg"
                  >
                    <span className="spinner d-inline-block">
                      <span className="bounce1" />
                      <span className="bounce2" />
                      <span className="bounce3" />
                    </span>
                    <span className="label">
                      <IntlMessages id="briefing.submit" />
                    </span>
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(VRExterior);
