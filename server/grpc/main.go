package main

import (
	"context"
	"encoding/json"
	"github.com/golang/protobuf/jsonpb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"io/ioutil"
	"log"
	"net"

	pb "../proto"
)

const (
	port = ":50051"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

type server struct{}

func (s *server) GetItems(ctx context.Context, in *pb.Empty) (*pb.ItemsReply, error) {
	buff, err := ioutil.ReadFile("data/items.json")
	check(err)

	items := make([]*pb.Item, 0)

	entries := make([]interface{}, 0)
	json.Unmarshal(buff, &entries)
	for i := 0; i < len(entries); i++ {
		entry, err := json.Marshal(entries[i])
		check(err)

		item := pb.Item{}
		jsonpb.UnmarshalString(string(entry[:]), &item)
		items = append(items, &item)
	}

	itemsReply := pb.ItemsReply{Item: items[:len(items)]}
	return &itemsReply, nil
}

func (s *server) GetFeatured(ctx context.Context, in *pb.Empty) (*pb.FeaturedItemsReply, error) {
	buff, err := ioutil.ReadFile("data/featured.json")
	check(err)

	items := make([]*pb.FeaturedItem, 0)

	entries := make([]interface{}, 0)
	json.Unmarshal(buff, &entries)
	for i := 0; i < len(entries); i++ {
		entry, err := json.Marshal(entries[i])
		check(err)

		item := pb.FeaturedItem{}
		jsonpb.UnmarshalString(string(entry[:]), &item)
		items = append(items, &item)
	}

	itemsReply := pb.FeaturedItemsReply{Item: items[:len(items)]}
	return &itemsReply, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterStoreServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
