
import React, {useState} from "react";
import {AiOutlineUpload} from "react-icons/ai";
import axios from 'axios'

import '../css/uploads.css'

function Uploads({tasks, index})  {
  const [facebookUpload, setFacebookUpload] = useState(null);
  const [instagramUpload, setInstagramUpload] = useState(null);
  const [linkedinUpload, setLinkedinUpload] = useState(null);
  const [whatsappUpload, setWhatsappUpload] = useState(null);
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  

 
    const onSubmitClick = async (e) => {
        
        const data = new FormData();
        if(facebookUpload)
        data.append('facebookUpload', facebookUpload);
        if(instagramUpload)
        data.append('instagramUpload', instagramUpload);
        if(linkedinUpload)
        data.append('linkedinUpload', linkedinUpload);
        if(whatsappUpload)
        data.append('whatsappUpload', whatsappUpload)

        const what = await axios.post(`/taskSubmission/${tasks[index]._id}`, data)

        console.log("in upload", what)

        if(what.data.status === 'success'){
          setShow(true)
          setErr(false)
        }
        else {
          setShow(false)
          setErr(true)
        }
      
    }

    return (
      <div >
        <div className="th-home-CurrentTask">
          <div>1. </div>
          <div>
             Instagram
          </div>
          <div>
          <input type="file" name="file" id="file1" class="inputfile" onChange={(e)=>{
            const file =  e.target.files[0];
            setInstagramUpload(file)
          }}/>
          <label for="file1">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>2. </div>
          <div>
             Facebook
          </div>
          <div>
          <input type="file" name="file" id="file2" class="inputfile"  onChange={(e)=>{
            const file =  e.target.files[0];
            setFacebookUpload(file)
          }} />
          <label for="file2">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>3. </div>
          <div>
             LinkedIn
          </div>
          <div>
          <input type="file" name="file" id="file3" class="inputfile" onChange={(e)=>{
            const file =  e.target.files[0];
            setLinkedinUpload(file)
          }}/>
           <label for="file3">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>4. </div>
          <div>
             Whatsapp
          </div>
          <div>
          <input type="file" name="file" id="file4" class="inputfile" onChange={(e)=>{
            const file =  e.target.files[0];
            setWhatsappUpload(file)
          }}/>
          <label for="file4">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
          
        </div>
        <div>
        <button className={err?(`errButton`): ( show? 'uploadedBtn' : 'Submitbtn')}
                onClick = {onSubmitClick}
        >{
          err? 'Failed' :
         ( show? 'Uploaded!' : 'Submit')
        }</button>
       
        </div>
      </div>
        
    );
  
}

export default Uploads;
