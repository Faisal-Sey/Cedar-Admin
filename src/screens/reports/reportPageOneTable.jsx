import PropTypes from 'prop-types';
import DocumentSpacer from "../../components/spacer/index.jsx";

const ReportPageOneTable = ({ data }) => {
    return (
        <div className="table-container">
            <DocumentSpacer name={"page-one-bannerBottom"} defaultValue={20} />
            <table className="custom-table" style={{marginTop: 0}}>
                <thead>
                <tr>
                    <th colSpan="2" className="header-cell">
                        {data?.report_title}
                    </th>
                </tr>
                <tr>
                    <td
                        colSpan="2"
                        rowSpan={2}
                        className="data-cell"
                        style={{
                            border: "none",
                            borderTop: '1px solid #ccc',
                            borderBottom: '1px solid #ccc',
                            height: 15
                        }}
                    >
                        {data.sub_title}
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="data-cell">Client Name</td>
                    <td className="data-cell">{data?.client_name}</td>
                </tr>
                <tr>
                    <td className="data-cell">Asset Name</td>
                    <td className="data-cell">{data?.asset_name}</td>
                </tr>
                <tr>
                    <td className="data-cell">Asset Serial number</td>
                    <td className="data-cell">{data?.serial_number}</td>
                </tr>
                <tr>
                    <td className="data-cell">Asset Model</td>
                    <td className="data-cell">{data?.asset_model}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

ReportPageOneTable.propTypes = {
    data: PropTypes.shape({
        services: PropTypes.string,
        invoice_name: PropTypes.string,
        client_job_reference: PropTypes.string,
        client_name: PropTypes.string,
        issuer: PropTypes.shape({
            name: PropTypes.string,
            qualification: PropTypes.string
        }),
    }).isRequired,
};

export default ReportPageOneTable;
