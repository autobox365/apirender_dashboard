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
  CustomInput,
  CardBody,
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  moodTimeOfDay: null,
  fileOutputSize: null,
};

const PDInteriorRenders = ({ service, orders, history }) => {
  const dropzone = useRef();
  const [residentialQty, setResidentialQty] = useState(null);
  const [commercialQty, setCommercialQty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  useEffect(() => {
    let x = orders.find((o) => o.value === "PD_INTERIOR_RENDERS_RESIDENTIAL");
    if (x !== undefined) {
      let items = [];
      for (let i = 0; i < x.quantity; i++) items.push(i);
      setResidentialQty(items);
    }
    let y = orders.find((o) => o.value === "PD_INTERIOR_RENDERS_COMMERCIAL");
    if (y !== undefined) {
      let items = [];
      for (let i = 0; i < y.quantity; i++) items.push(i);
      setCommercialQty(items);
    }
  }, []);

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

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">Interior Renders</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. Architectural blueprints/CAD files are preferred.
                    We can accept CAD (.dwg), PDF, JPEG or a sketch.
                    Please include floor plans, sectionals, roof plans, elevations and materials list.
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                {residentialQty && (
                  <>
                    <FormGroup>
                      <Label className="text-danger"> - Residential Property - </Label>
                    </FormGroup>
                    {residentialQty.map((item, index) => {
                      return (
                        <FormGroup row key={index}>
                          <Colxx sm="4">
                            <Label className="font-weight-bold">
                              Select Room or Space Type.
                            </Label>
                            <Input
                              type="select"
                              onChange={handleChange}
                              defaultValue=""
                              name={`residentialRoomType${index}`}
                              id={`residentialRoomType${index}`}
                            >
                              <option value="" disabled></option>
                              <option value="Master Bedroom">
                                Master Bedroom
                              </option>
                              <option value="Bedroom">Bedroom</option>
                              <option value="Bathroom">Bathroom</option>
                              <option value="Ensuite">Ensuite</option>
                              <option value="Living Room">Living Room</option>
                              <option value="Dining Room">Dining Room</option>
                              <option value="Open-Plan Living/Dining Room">
                                Open-Plan Living/Dining Room
                              </option>
                              <option value="Kitchen">Kitchen</option>
                              <option value="Children's Room">
                                Children's Room
                              </option>
                              <option value="Home Office">Home Office</option>
                              <option value="Entry">Entry</option>
                              <option value="Hallway">Hallway</option>
                              <option value="Home Bar">Home Bar</option>
                              <option value="Laundry">Laundry</option>
                              <option value="Staircase">Staircase</option>
                              <option value="Other">Other</option>
                            </Input>
                          </Colxx>
                          <Colxx sm="8">
                            <Label className="font-weight-bold">
                              Please select one of the interior design styles.
                            </Label>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle1_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="I'm Not Sure"
                                value="I'm Not Sure"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Our professional team will select a style that
                              will best suit your interior or outdoor space.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle2_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Modern"
                                value="Modern"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Crisp, clean lines complemented by a simple color
                              palette. Furniture and decor utilises mostly
                               glass and steel materials that deploy a
                              sense of calm and simplicity in a clutter-free
                              environment.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle3_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Contemporary"
                                value="Contemporary"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Follows a less strict format to the modern
                              style with more variations between spaces.
                              Furniture and decor play less of a functional role
                              with more concentration on design.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle4_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Industrial"
                                value="Industrial"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Suitable for lofts, converted warehouses and
                              interiors with exposed brick walls, this style
                              utilises large abstract art pieces and wood and
                              metal furniture with neutral colour schemes.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle5_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Mid-Century Modern"
                                value="Mid-Century Modern"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Mid-1900's inspired with strong elements of
                              minimalism and retro furniture and colour schemes.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle6_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Scandinavian"
                                value="Scandinavian"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Simple and understated style meets functionality.
                              There???s functionality in the furniture along with
                              some interesting lines, many of which have a
                              sculptural influence. Colour pallette is mostly
                              all-white with injections of colour from throws
                              and bright plastics.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle7_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Traditional"
                                value="Traditional"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Rich colour palettes meet curved lines and variety
                              of textures across furnishings and decor with
                              elaborate european inspired fabrics and details.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle8_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Rustic"
                                value="Rustic"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Inspired by nature utilising wood and stone
                              elements within the furniture and accesories.
                              Suitable for spaces with exposed wood beams and
                              wood floors that complement the rustic style.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle9_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="Coastal/Hamptons"
                                value="Coastal/Hamptons"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Featuring 'light and airy' colour palettes with
                              cool neutral shades paired with calming blues and
                              greens. Furniture is practical, utilising
                              elements of wood and are enhanced by decor and
                              accesories inspired by a coastal lifestlye.
                            </p>
                            <div className="mb-3">
                              <CustomInput
                                type="radio"
                                id={`residentialDesignStyle10_${index}`}
                                name={`residentialDesignStyle${index}`}
                                label="French Country"
                                value="French Country"
                                onChange={handleChange}
                              />
                            </div>
                            <p className="text-muted text-small">
                              Utilising furniture and decor with contrasting textures and colors.
                              Dark structural features accentuate pale walls and other light coloured elements of the spaces.
                            </p>
                          </Colxx>
                        </FormGroup>
                      );
                    })}
                  </>
                )}

                {commercialQty && (
                  <>
                    <FormGroup>
                      <Label className="text-danger"> - Commercial - </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label className="font-weight-bold">
                        <IntlMessages id="briefing.furniture-style" />
                      </Label>
                      <p className="text-small text-muted">
                        Please provide details on the furniture style here if
                        not included in schedule of finishes and construction
                        drawings.
                      </p>
                      <Row>
                        <Colxx>
                          <Input
                            type="textarea"
                            placeholder="Enter instructions here (optional)"
                            name={`commercialFurniturestyleText`}
                            id={`commercialFurniturestyleText`}
                            onChange={handleChange}
                            rows={5}
                          />
                        </Colxx>
                      </Row>
                    </FormGroup>
                    <FormGroup row>
                      {commercialQty.map((item, index) => {
                        return (
                          <Colxx sm="4" key={index}>
                            <Label className="font-weight-bold">
                              Select Room or Space Type.
                            </Label>
                            <Input
                              type="select"
                              onChange={handleChange}
                              defaultValue=""
                              name={`commercialRoomType${index}`}
                              id={`commercialRoomType${index}`}
                            >
                              <option value="" disabled></option>
                              <option value="Office">Office</option>
                              <option value="Retail">Retail</option>
                              <option value="Showroom">Bathroom</option>
                              <option value="Industrial">Industrial</option>
                              <option value="Other">Other</option>
                            </Input>
                          </Colxx>
                        );
                      })}
                    </FormGroup>
                  </>
                )}
                <p className="border-dotted-bottom text-danger mt-5 mb-5"></p>
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
                      name="moodTimeOfDay"
                      id="moodTimeOfDay"
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
                      <IntlMessages id="briefing.perspective" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.perspective-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="perspective"
                      id="perspective"
                    >
                      <option value="" disabled></option>
                      <option value="Front Center">Front Center</option>
                      <option value="Front Left">Front Left</option>
                      <option value="Front Right">Front Right</option>
                      <option value="Rear Center">Rear Center</option>
                      <option value="Rear Left">Rear Left</option>
                      <option value="Rear Right">Rear Right</option>
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

export default injectIntl(PDInteriorRenders);
