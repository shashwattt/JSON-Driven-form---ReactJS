export default {
  inputs: [
    {
      prps: {
        hdr: "Workflow Details",
        sbHdr: "",
        plchldr: "Approval Workflow Name",
        vld: {
          mnLgth: "1",
          mxLgth: "50",
          regex: '"reg expression"'
        },
        nm: "store",
        val: null
      },
      type: "text",
      key: "input1"
    },
    {
      prps: {
        hdr: "Select Product",
        sbHdr: "Help text to understand select product",
        vld: {
          regex: '"reg expression"'
        },
        val: "vendor_invoice",
        nm: "product",
        itms: [
          {
            lbl: "Vendor Invoice",
            val: "vendor_invoice"
          },
          {
            lbl: "Payouts",
            val: "payouts"
          }
        ]
      },
      key: "input2",
      type: "radio",
      flwUp: [
        {
          cndtn: [
            {
              name: "product",
              val: "vendor_invoice"
            }
          ],
          prps: {
            hdr: "Select Product feature",
            sbHdr: "Help text to understand select product",
            vld: {
              regex: '"reg expression"'
            },
            plchldr: "Please select",
            val: "",
            api: {
              url: "'/api/v1/getStores?page=0&size=10",
              paginated: true
            },
            nm: "productFeature",
            itms: [
              {
                lbl: "Add Invoice",
                val: "addInvoice"
              },
              {
                lbl: "Pay Invoice",
                val: "payInvoice"
              }
            ]
          },
          type: "radio",
          key: "input12"
        }
      ]
    }
  ]
};
