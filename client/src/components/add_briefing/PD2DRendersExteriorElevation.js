import React, { useRef, useState } from "react";
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
  CustomInput,
  CardBody,
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  landscaping: null,
  driveaway: null,
  fileOutputSize: null,
  additionalInformation: null,
};

const PD2DRendersExteriorElevation = ({ service, orders, history }) => {
  const dropzone = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const files = dropzone.current.myDropzone.files;
    const uploadFormData = new FormData();
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    for (let i = 0 ; i < files.length ; i ++) {
      uploadFormData.append("basic", files[i]);
    }
    uploadFormData.append("serviceId", service._id);
    uploadFormData.append("content", JSON.stringify(formData));

    axios
      .post(`/api/briefing/save`, uploadFormData, config)
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

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">2D Renders (Exterior Elevation)</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload elevation drawings or a detailed sketch here.
                    We accept all file formats (JPEG, CR2, Tiff, PDF, etc.)
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.landscaping" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.landscaping-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="landscaping"
                      id="landscaping"
                    >
                      <option value="" disabled></option>
                      <option value="Small Trees">Small Trees</option>
                      <option value="Large Trees">Large Trees</option>
                      <option value="Sapplings/Succulents">Sapplings/Succulents</option>
                      <option value="Plantar Boxes">Plantar Boxes</option>
                      <option value="Hedges">Hedges</option>
                      <option value="Built - Deck, Paving, Stones, etc">Built - Deck, Paving, Stones, etc</option>
                      <option value="Flower Beds">Flower Beds</option>
                      <option value="Other - Include notes in Brief Submission Section">Other - Include notes inBrief Submission Section</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.driveway" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.driveway-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="driveaway"
                      id="driveaway"
                    >
                      <option value="" disabled></option>
                      <option value="No Driveaway">No Driveaway</option>
                      <option value="Exposed Aggregate (Light-Colored)">Exposed Aggregate (Light-Colored)</option>
                      <option value="Exposed Aggregate (Dark-Colored)">Exposed Aggregate (Dark-Colored)</option>
                      <option value="Pavement">Pavement</option>
                      <option value="Concrete">Concrete</option>
                      <option value="Stone">Stone</option>
                      <option value="Bitumen">Bitumen</option>
                      <option value="Other - Include notes in Brief Submission Section">Other - Include notes in Brief Submission Section</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.file-output-size" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.file-output-size-description" />
                    </p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="fileOutputSize1"
                        name="fileOutputSize"
                        label="Web Only (1mb)"
                        value="Web Only (1mb)"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize2"
                        name="fileOutputSize"
                        label="Print Only (>5mb)"
                        value="Print Only (>5mb)"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize3"
                        name="fileOutputSize"
                        label="Web and Print"
                        value="Web and Print"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                <FormGroup>
                    <Label className="font-weight-bold">
                    <IntlMessages id="briefing.additional-information" />
                  </Label>
                  <p className="text-small text-muted">
                    Include details on colours and materials if these are not detailed in the elevation plans or sketch you have provided.
                  </p>
                  <Input
                    type="textarea"
                    placeholder="Enter instructions here (optional)"
                    name="additionalInformation"
                    id="additionalInformation"
                    onChange={handleChange}
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

export default injectIntl(PD2DRendersExteriorElevation);
