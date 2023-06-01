import nodemailer from 'nodemailer';

const Price = (options) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return
        }
    }
    );
}; 

const PriceSender = ({firstName ,lastName, email, engagementModel})=>{
    const options = {
      from: `FBC ASIA<${process.env.USER}>`,
      to: process.env.SEND_TO,
      subject: "Email from FBC ASIA",
      html: `<div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #FF731D; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" style=" text-decoration: none;">
          <p style="color:white; font-size:2rem; text-align:center; font-weight: 800;">FBC ASIA</p>
          </a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 16px; padding: 0 30px">
             ${email} has been asked for  Pricelist of ${engagementModel}
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Full Name: <b>${firstName} ${lastName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Selected option: <i>${engagementModel}</i></p>
            </div>
          </div>
        </div>
      </div>`,
    };
    Price(options);
}

export default PriceSender;