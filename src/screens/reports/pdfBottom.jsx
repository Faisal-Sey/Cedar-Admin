import {generateImageUrl} from "../../utils/index.js";
import DocumentSpacer from "../../components/spacer/index.jsx";


const PdfBottom = ({ data, uniqueId }) => {
    return (
        <div className="pdf_bottom">
            <DocumentSpacer name={uniqueId} defaultValue={10} />
            <table className="w-[100%]">
                <thead>
                <tr>
                    <th></th>
                    <th>Inspected by</th>
                    <th>Reviewed by</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div style={{
                            color: data?.report_status === 'Accepted' ? 'green' : 'red',
                            fontSize: 25
                        }}><b>{data?.report_status}</b></div>
                    </td>
                    <td>
                        <div>
                            {data?.inspector_signature_url && <img
                                src={generateImageUrl(data?.inspector_signature_url)}
                                alt={"inspector_signature"}
                                style={{width: 150}}
                            />}
                        </div>
                    </td>
                    <td>
                        <div>
                            {data?.reviewer_signature_url && <img
                                src={generateImageUrl(data?.reviewer_signature_url)}
                                alt={"reviewer_signature"}
                                style={{width: 150}}
                            />}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{data?.issuer?.name}</td>
                    <td>{data?.quality_controller?.name}</td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td>{data?.issuer?.qualification}</td>
                    <td>{data?.quality_controller?.qualification}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{data?.issuer?.date}</td>
                    <td>{data?.quality_controller?.date}</td>
                </tr>
                </tbody>
            </table>
            <p style={{fontSize: 14, margin: "15px 20px 20px", fontWeight: 700}}>
                <i>Copyright of this report is owned by the Cedar Inspection Ventures (CIV) and may not be reproduced,
                    distributed or communicated with any third party except with the prior written approval of CIV.</i>
            </p>
        </div>
    )
}


export default PdfBottom;
