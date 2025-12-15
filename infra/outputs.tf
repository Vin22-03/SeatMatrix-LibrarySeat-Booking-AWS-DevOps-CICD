output "alb_dns" {
  value = aws_lb.alb.dns_name
}

output "cluster_name" {
  value = aws_ecs_cluster.main.name
}

output "service_name" {
  value = aws_ecs_service.frontend.name
}

output "task_definition" {
  value = aws_ecs_task_definition.frontend.family
}
