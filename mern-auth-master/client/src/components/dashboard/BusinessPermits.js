import React, { Component } from "react";


class BusinessPermits extends Component {
    render() {
        return(
            <div>
                <div class="responsive-table container valign-wrapper">
                    <table id="tbl_exporttable_to_xls" border="2" class="centered highlight">
                        <thead>
                            <th>Personnel Assignment</th>
                            <th>Location</th>
                            <th>Store</th>
                            <th>Company</th>
                            <th>Business Permit</th>
                            <th>Brgy Permit</th>
                            <th>Insurance</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MELVIN DAZA</td>
                                <td>Muntinlupa</td>
                                <td>ATC 1</td>
                                <td>APGTSI</td>
                                <td>1/28/2021</td>
                                <td>1/13/2021</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onclick="ExportToExcel('xlsx')">Export table to excel</button>
                </div>
            </div>
        );
    }
}



export default BusinessPermits;

