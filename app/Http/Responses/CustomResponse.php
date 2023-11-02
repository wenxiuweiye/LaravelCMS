<?php
    namespace App\Http\Responses;

use Illuminate\Http\Response;

    class CustomResponse 
    {
        protected $data;
        protected $status;
        protected $message;

        function __construct($data, $status = 200)
        {
            $this->data = $data;
            $this->status = $status;
        }

       function getData(){
            return $this->data;
       }

       function setData($data){
            $this->data = $data;
       }

       function getStatus(){
            return $this->status;
        }

        function setStatus($status){
                $this->status = $status;
        }

        function getMessage(){
            return $this->message;
        }

        function setMessage($message){
                $this->message = $message;
        }

        function _toString(){
            return json_encode(get_object_vars($this), JSON_UNESCAPED_UNICODE);
        }
    }
?>