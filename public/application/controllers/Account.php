<?php
class Account extends CI_Controller {

  public function index() {
    echo "This is default function.";
  }

  public function add_account() {
    $this->load->model('Account_Model');

    $data = array(
      'userName' => $this->input->post('userName'),
      'password' => $this->input->post('password'),
      'email' => $this->input->post('email'),
      'country' => $this->input->post('country'),
      'phone' => $this->input->post('phone'),
      'termsApproved' => $this->input->post('termsApproved'),
    );

    $this->Account_Model->insert($data);
  }
}
?>
