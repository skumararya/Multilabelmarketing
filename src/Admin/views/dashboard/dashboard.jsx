import React from "react";
import WidgetsDropdown from "../../widgets/WidgetsDropdown";

import {
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdown,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilOptions,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";

const dashboard = () => {
  const tableExample = [
    {
      avatar: { src: "images/logo.png", status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago",
    },
    {
      avatar: { src: "images/logo.png", status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021",
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "info",
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: "images/logo.png", status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
      country: { name: "India", flag: cifIn },
      usage: {
        value: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "warning",
      },
      payment: { name: "Stripe", icon: cibCcStripe },
      activity: "1 hour ago",
    },
    {
      avatar: { src: "images/logo.png", status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
      country: { name: "France", flag: cifFr },
      usage: {
        value: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "danger",
      },
      payment: { name: "PayPal", icon: cibCcPaypal },
      activity: "Last month",
    },
    {
      avatar: { src: "images/logo.png", status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Spain", flag: cifEs },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "primary",
      },
      payment: { name: "Google Wallet", icon: cibCcApplePay },
      activity: "Last week",
    },
    {
      avatar: { src: "images/logo.png", status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week",
    }, 
  ];
  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CTable align="middle" color="light" striped className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <CDropdown>
                          <CDropdownToggle   color="secondary"> <CIcon size="xl" icon={cilOptions} /></CDropdownToggle>
  <CDropdownMenu style={{ transform: 'translate3d(-125px, -2px, 0px)' }}>
    <CDropdownItem href="#">Edit</CDropdownItem>
    <CDropdownItem href="#">Delete</CDropdownItem>
    <CDropdownItem href="#">Other Action</CDropdownItem>
  </CDropdownMenu>
 </CDropdown>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default dashboard;
