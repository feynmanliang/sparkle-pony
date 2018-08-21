# SparklePony Backend

Uses grpc-gateway to provide a type-safe HTTP/gRPC API.

## Compiling gRPC protos

```
# gRPC protoc plugin
go get -u google.golang.org/grpc

# Generate Go code from protobufs
go get -u github.com/golang/protobuf/protoc-gen-go

go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger

ninja -c proto
```

## Running

```
go run grpc/main.go
grpc_cli call localhost:50051 GetItems ""

go run http/main.go
echo '{"name": "world"}' | http POST :8080/v1/sparklepony/sayhello
```
