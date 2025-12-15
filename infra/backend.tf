terraform {
  backend "s3" {
    bucket         = "seatmatrix-tfstate-bucket"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "seatmatrix-terraform-lock"
    encrypt        = true
  }
}
