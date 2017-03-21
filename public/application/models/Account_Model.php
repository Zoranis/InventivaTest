<?php
   class Account_Model extends CI_Model {

      function __construct() {
         parent::__construct();
      }

      public function insert($data) {
         if ($this->db->insert("accounts", $data)) {
            return true;
         }
      }

    
   }
?>
