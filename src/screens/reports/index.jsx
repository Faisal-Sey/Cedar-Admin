// src/components/Invoices.js
import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../libs/axiosClient.js";
import {IoEyeOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {setInvoiceData} from "../../redux/slices/invoiceSlice.js";
import {BsTrash} from "react-icons/bs";

const Reports = () => {
    const [invoices, setInvoices] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const previewInvoice = (e, id) => {
        e.stopPropagation()
        navigate(`/preview-job-quotation/${id}`);
    }

    useEffect(() => {
        const getAllInvoices = async () => {
            try {
                const response = await axiosClient.get('/invoices/get-invoices/');
                const data = response.data.data;
                setInvoices(data);
                dispatch(setInvoiceData(data));
            } catch (error) {
                console.error(error);
            }
        }

        getAllInvoices();

    }, []);

    const totalInvoices = invoices.length;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Reports</h1>
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-600">
                                Total Reports: <span className="font-bold">{totalInvoices}</span>
                            </p>
                            <Link
                                to="/add-report"
                                className="add-invoice-btn font-bold py-2 px-4 rounded"
                            >
                                Add Report
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {invoices.map((invoice) => (
                                <div
                                    key={invoice?.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                    onClick={() => navigate(`/job-quotation/update/${invoice?.id}`)}
                                >
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h2 className="text-lg font-semibold mb-2">{invoice?.quote_number}</h2>
                                        <div className="flex">
                                            <p onClick={(e) => previewInvoice(e, invoice?.id)}>
                                                <IoEyeOutline size={16} fill="#288068
                                                " />
                                            </p>
                                            <BsTrash className="ml-3" fill="red" />
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        <b>Client:</b> {invoice?.client_name}
                                        <br />
                                        <b>Date:</b> {invoice?.invoice_date}
                                        <br />
                                        <b>Prepared by:</b> {invoice?.prepared_by}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reports;