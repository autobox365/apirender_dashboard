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
  residentialMoodTimeOfDay: null,
  residentialLandscaping: null,
  residentialDriveaway: null,
  residentialVehicles: null,
  residentialFencing: null,
  residentialMailbox: null,
  
  commercialMoodTimeOfDay: null,
  commercialLandscaping: null,
  commercialDriveaway: null,
  commercialVehicles: null,
  commercialFencing: null,
  commercialMailbox: null,
  additionalInformation: null,
};

const PD3DInteriorRenders360Degree = ({ service, orders, history }) => {
  const dropzone = useRef();
  const commericalDropzone = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    
    const postFormData = new FormData();
    
    const files = dropzone.current.myDropzone.files;
    const commericlaFiles = commericalDropzone.current.myDropzone.files;
    files.map((file) => { postFormData.append("basic", file)});
    commericlaFiles.map((file) => { postFormData.append("COMMERCIAL_FILES", file)});

    
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

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">
                3D Interior Renders (360 Degree)
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. Architectural blueprints/CAD files are preferrred.
                    We can accept CAD(.dwg), PDF, JPEG or a sketch.
                    Please include floor plans, sectionals, roof plans, elevations and material list.
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup>
                  <Label className="text-primary">
                    Residential
                  </Label>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.select-mood-time-of-day" />
                    </Label>
                    <p className="static-height"></p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="residentialMoodTimeOfDay"
                      id="residentialMoodTimeOfDay"
                    >
                      <option value="" disabled></option>
                      <option value="Bright & Airy (Day Time)">
                        Bright & Airy (Day Time)
                      </option>
                      <option value="Soft & Soothing (Twlight)">
                        Soft & Soothing (Twlight)
                      </option>
                      <option value="Smooth & Seductive (Night Time)">
                        Smooth & Seductive (Night Time)
                      </option>
                    </Input>
                  </Colxx>
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
                      name="residentialLandscaping"
                      id="residentialLandscaping"
                    >
                      <option value="" disabled></option>
                      <option value="Small Trees">Small Trees</option>
                      <option value="Large Trees">Large Trees</option>
                      <option value="Sapplings/Succulents">
                        Sapplings/Succulents
                      </option>
                      <option value="Plantar Boxes">Plantar Boxes</option>
                      <option value="Hedges">Hedges</option>
                      <option value="Built - Deck, Paving, Stones, etc">
                        Built - Deck, Paving, Stones, etc
                      </option>
                      <option value="Flower Beds">Flower Beds</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes inBrief Submission Section
                      </option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.vehicles" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.vehicles-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="residentialVehicles"
                      id="residentialVehicles"
                    >
                      <option value="" disabled></option>
                      <option value="No Vehicle">No Vehicle</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Luxury Vehicle">Luxury Vehicle</option>
                      <option value="Motorbike">Motorbike</option>
                      <option value="Motor Boat & Trailer">
                        Motor Boat & Trailer
                      </option>
                    </Input>
                  </Colxx>
                </FormGroup>
                <FormGroup>
                  <Label className="text-primary">
                    Commercial
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <FileDropzone ref={commericalDropzone} />
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.select-mood-time-of-day" />
                    </Label>
                    <p className="text-small text-muted static-height"></p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="commercialMoodTimeOfDay"
                      id="commercialMoodTimeOfDay"
                    >
                      <option value="" disabled></option>
                      <option value="Bright & Airy (Day Time)">
                        Bright & Airy (Day Time)
                      </option>
                      <option value="Soft & Soothing (Twlight)">
                        Soft & Soothing (Twlight)
                      </option>
                      <option value="Smooth & Seductive (Night Time)">
                        Smooth & Seductive (Night Time)
                      </option>
                    </Input>
                  </Colxx>
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
                      name="commercialLandscaping"
                      id="commercialLandscaping"
                    >
                      <option value="" disabled></option>
                      <option value="Small Trees">Small Trees</option>
                      <option value="Large Trees">Large Trees</option>
                      <option value="Sapplings/Succulents">
                        Sapplings/Succulents
                      </option>
                      <option value="Plantar Boxes">Plantar Boxes</option>
                      <option value="Hedges">Hedges</option>
                      <option value="Built - Deck, Paving, Stones, etc">
                        Built - Deck, Paving, Stones, etc
                      </option>
                      <option value="Flower Beds">Flower Beds</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes inBrief Submission Section
                      </option>
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
                      name="commercialDriveaway"
                      id="commercialDriveaway"
                    >
                      <option value="" disabled></option>
                      <option value="No Driveaway">No Driveaway</option>
                      <option value="Exposed Aggregate (Light-Colored)">
                        Exposed Aggregate (Light-Colored)
                      </option>
                      <option value="Exposed Aggregate (Dark-Colored)">
                        Exposed Aggregate (Dark-Colored)
                      </option>
                      <option value="Pavement">Pavement</option>
                      <option value="Concrete">Concrete</option>
                      <option value="Stone">Stone</option>
                      <option value="Bitumen">Bitumen</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes in Brief Submission Section
                      </option>
                    </Input>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.vehicles" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.vehicles-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="commercialVehicles"
                      id="commercialVehicles"
                    >
                      <option value="" disabled></option>
                      <option value="No Vehicle">No Vehicle</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Luxury Vehicle">Luxury Vehicle</option>
                      <option value="Motorbike">Motorbike</option>
                      <option value="Motor Boat & Trailer">
                        Motor Boat & Trailer
                      </option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.fencing" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.fencing-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="commercialFencing"
                      id="commercialFencing"
                    >
                      <option value="" disabled></option>
                      <option value="Timber (Light-Colored)">
                        Timber (Light-Colored)
                      </option>
                      <option value="Timber (Dark-Colored)">
                        Timber (Dark-Colored)
                      </option>
                      <option value="Rendered Wall ">Rendered Wall </option>
                      <option value="Brick">Brick</option>
                      <option value="No Fencing">No Fencing</option>
                      <option value="Picket Fence">Picket Fence</option>
                      <option value="Steel Panel">Steel Panel</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.mailbox" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.mailbox-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="commercialMailbox"
                      id="commercialMailbox"
                    >
                      <option value="" disabled></option>
                      <option value="No Mailbox">No Mailbox</option>
                      <option value="Rendered/Concrete">
                        Rendered/Concrete
                      </option>
                      <option value="Post-Mounted">Post-Mounted</option>
                      <option value="Brick">Brick</option>
                      <option value="Wall-Mounted">Wall-Mounted</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes in Brief Submission Section
                      </option>
                    </Input>
                  </Colxx>
                </FormGroup>

                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.additional-information" />
                  </Label>
                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.additional-information-description" />
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

export default injectIntl(PD3DInteriorRenders360Degree);
